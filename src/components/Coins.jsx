import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../index'
import {HStack,Button,Container,VStack,Image,Heading,Text,RadioGroup,Radio} from "@chakra-ui/react"
import Loader from './Loader'
import Error from './Error'
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPages] = useState(1);
  const [currency,setCurrency] = useState('inr');

  const currencySymbol = currency === "inr"?"₹" : currency === "eur"?"€" : "$";

  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1); 


  useEffect( () => {
    const fetchCoins = async() => {
      try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      setCoins(data);
      setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(true);
      }
    }
    fetchCoins()
  },[currency,page])

  if(error) return <Error message={'Error while fetching coins'}/>

  return (
    <>
      <Container maxW={'container.xl'}>
        {loading? <Loader /> : <>

        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
          <HStack spacing={'4'}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>

          <HStack wrap={'wrap'} justifyContent='space-evenly'>
            {coins.map((i) => (<CoinCard id={i.id} key={i.id} name={i.name} img={i.image} 
            price={i.current_price} symbol={i.symbol} url={i.url} currencySymbol={currencySymbol} />))}
          </HStack>

        <HStack w={'full'} overflowX='auto' p='8'>
          {
            btns.map((item,index)=>(
              <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>
            ))}

        </HStack>
        </>}
      </Container>
    </>
  )
}



export default Coins
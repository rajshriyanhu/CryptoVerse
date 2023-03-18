import React from 'react'
import {Box,Image,Text } from "@chakra-ui/react"
import Img from '../assets/btc.png'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={'black'} w={'full'} h={'90vh'}>
    <motion.div style={{
      height:'85vh',
    }}
    animate={{
      translateY:'-22px'
    }}
    transition={{
      duration:1,
      repeat:Infinity,
      repeatType:'reverse',
    }}>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={Img} filter={'greyscale(1)'} />
    </motion.div>
    <Text  fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={'-20'}>Cryptoverse</Text>

    </Box>
  )
}

export default Home
import React from 'react'
import {HStack,Button} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'5'} shadow={'base'} bgColor={'blackAlpha.900'}>
        <Button variant={'solid'} color={'black'}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'solid'} color={'black'}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'solid'} color={'black'}>
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header
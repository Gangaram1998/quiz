import React from 'react'
import {
    Box,
    Image,
    Text
} from "@chakra-ui/react"
import logo from "../constant/quiz.png"

const Navbar = () => {
    return (
        <Box  padding="10px 50px" display='flex' gap='10px'  alignItems="center" boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image height={"100%"} width={"80px"} src={logo} alt="logo"/>
        </Box>
    )
}

export default Navbar
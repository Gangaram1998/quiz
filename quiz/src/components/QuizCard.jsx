import React from 'react'
import {Box, Button, Text} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export const QuizCard = ({i,id,desc,level}) => {
  const navigate=useNavigate()
  return (
    <Box padding="20px 10px"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" maxW={"300px"} w="300px"  h='250px'   display="flex" flexDirection="column" gap="20px" >
      <Text fontSize="24px" color="blue" fontWeight="700">Quiz : {i+1}</Text>
        <Text fontSize="20px" fontWeight="700" color="gray.600">{desc}</Text>
        <Text fontSize="18px" fontWeight="600">level:{level}</Text>
        <Button color={"white"} bg={"green.500"} _hover={{bg:"white",color:"green.500",border:"1px solid blue" }} onClick={()=>navigate(`/${id}`)}>Start Quiz</Button>
    </Box>
  )
}

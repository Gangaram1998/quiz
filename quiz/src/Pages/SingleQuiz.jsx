import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Box,Button} from "@chakra-ui/react"
import { QuestionComp } from '../components/QuestionComp'

export const SingleQuiz = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        axios.get(`https://api.essaychecker.ai/quiz/packs/?id=${id}`)
        .then((res)=>setData(Object.values(res.data.data)))
        .catch((err)=>console.log(err))
    },[])

  return (
    <Box marginTop="20px" width={{base:"100%",sm:"80%"}} mx="auto">
        {data.length>0 && <QuestionComp data={data[index]} i={index} index={index} setIndex={setIndex} length={data.length}/>}
    </Box>
  )
}

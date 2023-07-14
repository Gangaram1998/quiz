import React, { useEffect, useState } from 'react'
import {Grid} from "@chakra-ui/react"
import { QuizCard } from '../components/QuizCard'
import axios from "axios"
    export const Quiz = () => {

    const [data,setData] =useState([])

    useEffect(()=>{
        axios.get(`https://api.essaychecker.ai/quiz/packs/`)
        .then((res)=>{
            setData(Object.values(res.data.data));
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    

  return (
    <Grid templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(3, 1fr)"}} gap={8} maxW="100%" w={{base:"100%",sm:"80%"}} mx="auto"  justifyItems="center" py="50px"
    alignItems="center">
        {
            data.length > 0 && data.map((el,i)=><QuizCard key={`pack_${i+1}`} id={`pack_${i+1}`} i={i} name={el.name} desc={el.desc} level={el.level}/>
            )
        }
    </Grid>
  )
}

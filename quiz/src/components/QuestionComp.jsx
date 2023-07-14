import React, { useEffect, useState } from 'react'
import {
    Box, Text, Grid, Button, useToast
} from "@chakra-ui/react"

export const QuestionComp = ({ data: { q, word, options: { a: { word: optionA }, b: { word: optionB }, c: { word: optionC }, d: { word: optionD } }, ans }, i, setIndex, index, length }) => {

    const [show, setShow] = useState(false)
    const [option, setOption] = useState("")
    const toast = useToast()

    const handleSubmit = () => {
        if (option === ans) {
            setShow(true)
            toast({
                title: "Hooray!",
                status: "success",
                position: 'center',
                description: `Correct Answer`,
                duration: 3000,
                isClosable: true,
                toastOptions: {
                    style: {
                        width: '400px',
                        fontSize: '30px',
                    },
                },
            })
        }
        else {
            setShow(true)
            toast({
                title: "Oppps...",
                status: "error",
                description: `Wrong Answer`,
                duration: 3000,
                position: 'center',
                variant: 'subtle',
                isClosable: true,
                toastOptions: {
                    style: {
                        width: '400px',
                        fontSize: '30px',
                    },
                },
            })
        }
    }

    return (
        <>
            <Box border={"1px solid gray"} padding="10px 30px" textAlign="start" borderRadius="40px">
                <Text fontSize="20px" fontWeight="600" color="gray.700">Q.{i + 1}  {q}?</Text>
                <Text fontSize="20px" fontWeight="600" color="gray.700" marginLeft="50px">Word: {word}</Text>
            </Box>
            <Grid fontSize="20px" fontWeight="600" color="gray.700" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={10} marginTop="40px" >
                <Box border="1px solid gray" borderRadius="20px" py="10px" bg={option === "a" ? "blue" : "none"} color={option === "a" ? "white" : "black"} isDisabled={show===true} onClick={() => setOption("a")}>a. {optionA}</Box>
                <Box border="1px solid gray" borderRadius="20px" py="10px" bg={option === "b" ? "blue" : "none"} color={option === "b" ? "white" : "black"} isDisabled={show===true} onClick={() => setOption("b")}>b. {optionB}</Box>
                <Box border="1px solid gray" borderRadius="20px" py="10px" bg={option === "c" ? "blue" : "none"} color={option === "c" ? "white" : "black"} isDisabled={show===true} onClick={() => setOption("c")}>c. {optionC}</Box>
                <Box border="1px solid gray" borderRadius="20px" py="10px" bg={option === "d" ? "blue" : "none"} color={option === "d" ? "white" : "black"} isDisabled={show===true} onClick={() => setOption("d")}>d. {optionD}</Box>
            </Grid>
            {show ? <Box marginTop="40px" py="10px" bg="green.100" fontSize="20px" fontWeight="600" color="gray.700"><Text>Answer: {ans}</Text></Box> : <Box marginTop="40px" py="10px" ><Button padding={"10px 30px"} bg="green" _hover={{ color: "green", border: "1px solid green", bg: "white" }} color="white"
                onClick={handleSubmit}>Submit</Button></Box>}
            <Box display="flex" justifyContent="space-around" marginTop="20px">
                <Button disabled={index <= 0} padding={"10px"} bg="blue" color="white" _hover={{ color: "blue", border: "1px solid blue", bg: "white" }} onClick={() => { setIndex(prev => prev - 1); setShow(false); setOption("") }} isDisabled={index <= 0}>Previous</Button>
                <Button padding={"10px 30px"} bg="blue" color="white" _hover={{ color: "blue", border: "1px solid blue", bg: "white" }} onClick={() => { setIndex(prev => prev + 1); setShow(false); setOption("") }} isDisabled={index >= length - 1}>Next</Button>
            </Box>

        </>)
}

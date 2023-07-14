import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Quiz } from '../Pages/Quiz'
import { SingleQuiz } from '../Pages/SingleQuiz'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Quiz/>}></Route>
        <Route path='/:id' element={<SingleQuiz/>}></Route>
    </Routes>
  )
}

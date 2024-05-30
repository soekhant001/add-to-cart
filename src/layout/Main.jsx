import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import BackDrop from '../components/BackDrop'

const Main = () => {
    const [isOpen,setIsOpen] = useState(false);
    const showCardHandler = () => {
        setIsOpen(!isOpen)
    }
    // const hideCardHandler = () => {
    //     setIsShow(false)
    // }
  return (
    <section className="w-[80%] mx-auto my-5">
      <Header showCardHandler={showCardHandler} />
      <Body />
      <BackDrop isOpen={isOpen} showCardHandler={showCardHandler} />

    </section>
  )
}

export default Main

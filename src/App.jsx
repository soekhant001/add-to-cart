import React from 'react'
import Main from './layout/Main'
import ItemContextProvider from './store/ItemContextProvider'

const App = () => {
  return (
    <>
    <ItemContextProvider>
    <Main />
    </ItemContextProvider>
    </>
  )
}

export default App

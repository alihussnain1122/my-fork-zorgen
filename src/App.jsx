import React from 'react'

import Banner from './components/Banner'
import Header from './components/Header'
import Main from './components/Main'
import ListIcon from './components/ListIcon'
import KnowMore from './components/Button/KnowMore'
import MidBanner from './components/MidBanner'
import Carrossel from './components/Carrossel'
import Form from './components/Form'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <h2>I am contributing in project</h2>
      <ListIcon />
      <KnowMore />
      <MidBanner />
      <Carrossel />
      <Form />
      <Footer />
    </>
  )
}

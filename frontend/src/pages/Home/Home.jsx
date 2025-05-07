import React, { useState, useRef } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("All")
  const menuRef = useRef(null)

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header scrollToMenu={scrollToMenu} />
      <ExploreMenu setCategory={setCategory} category={category} ref={menuRef} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  )
}

export default Home
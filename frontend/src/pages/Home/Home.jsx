import React, { use, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'

const Home = () => {
  const [category,setCstegory] = useState("All");
  
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCstegory={setCstegory} />
    </div>
  )
}

export default Home

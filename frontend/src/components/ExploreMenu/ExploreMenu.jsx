import React, { useContext, forwardRef } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = forwardRef(({ category, setCategory }, ref) => {
  const { menu_list } = useContext(StoreContext)

  return (
    <div className='explore-menu' id='explore-menu' ref={ref}>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu...</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            className='explore-menu-list-item'
          >
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
})

export default ExploreMenu
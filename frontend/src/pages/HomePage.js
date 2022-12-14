//react
import React from 'react'
//components
import Feed from '../components/ui-template/Feed'
import HomeProfileTemp from '../components/ui-template/HomeProfileTemp'
import Trending from '../components/ui-template/Trending'
//styles
import  '../styles/_hero-bcg.scss'
import '../styles/_home-feed.scss'
import '../styles/components/buttons/_addBackToTop.scss'
//
import BottomNav from '../components/navbar/BottomNav'

function HomePage() {
  return (
    <>
      <HomeProfileTemp />
      <div className='home-feed'>
        <div className='home-feed__left'>
         <Feed />
        </div>

        
        
        <div className='home-feed__right'>
          <div className='home-feed__right-parent'> 
            <Trending />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}
export default HomePage
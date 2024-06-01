import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idname, classnames) => function HOC() {
  return (
    <div id={idname} className={`app__container ${classnames}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2024 Omar</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idname} />
    </div>
  )
}

export default AppWrap;
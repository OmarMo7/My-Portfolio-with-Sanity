import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://x.com/Omar_Mostafa_77" target="_blank" rel="noopener noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://github.com/OmarMo7" target="_blank" rel="noopener noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia

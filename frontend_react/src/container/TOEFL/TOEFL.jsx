import React, { useState } from 'react'
import './TOEFL.scss'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useInView } from 'react-intersection-observer'

const TOEFL = () => {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        // Simulate gauge filling up when in view
        let value = 0
        const interval = setInterval(() => {
          if (value >= 100) clearInterval(interval)
          value += 2
          setProgress(value)
        }, 20)
      }
    }
  })

  // Static TOEFL data
  const toeflScore = {
    title: 'TOEFL Score',
    totalScore: 84,
    reading: 20,
    listening: 21,
    speaking: 20,
    writing: 23,
    testDate: '13/12/2024',
    // imgUrl: 'path_to_image' // If you have an image, specify its path here
  }

  const progressValue = (score) => (progress * score) / 100

  return (
    <>
      <h2 className='head-text'>English Language Proficiency: <span>TOEFL</span></h2>

      <div className='app__profiles' ref={ref}>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item-toefl'
          // key={toeflScore.title}
        >
          {/* <img src={toeflScore.imgUrl} alt={toeflScore.title} /> */}
          <h2 className='bold-text' style={{ marginTop: 20 }}>{toeflScore.title}</h2>
          <div className='toefl-details'>
            <div className='gauge-center'>
              <CircularProgressbar
                value={progressValue(toeflScore.totalScore)}
                maxValue={120}
                text={`${toeflScore.totalScore}/120`}
                styles={buildStyles({
                  textColor: '#333',
                  pathColor: '#4caf50',
                  trailColor: '#d6d6d6',
                })}
              />
              <p className='gauge-label'>Total Score</p>
            </div>
            <div className='gauges-row'>
              <div className='gauge'>
                <CircularProgressbar
                  value={progressValue(toeflScore.reading)}
                  maxValue={30}
                  text={`${toeflScore.reading}/30`}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#2196f3',
                    trailColor: '#d6d6d6',
                  })}
                />
                <p className='gauge-label'>Reading</p>
              </div>
              <div className='gauge'>
                <CircularProgressbar
                  value={progressValue(toeflScore.listening)}
                  maxValue={30}
                  text={`${toeflScore.listening}/30`}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#ff9800',
                    trailColor: '#d6d6d6',
                  })}
                />
                <p className='gauge-label'>Listening</p>
              </div>
              <div className='gauge'>
                <CircularProgressbar
                  value={progressValue(toeflScore.speaking)}
                  maxValue={30}
                  text={`${toeflScore.speaking}/30`}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#f44336',
                    trailColor: '#d6d6d6',
                  })}
                />
                <p className='gauge-label'>Speaking</p>
              </div>
              <div className='gauge'>
                <CircularProgressbar
                  value={progressValue(toeflScore.writing)}
                  maxValue={30}
                  text={`${toeflScore.writing}/30`}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#9c27b0',
                    trailColor: '#d6d6d6',
                  })}
                />
                <p className='gauge-label'>Writing</p>
              </div>
            </div>
            <p className='p-text' style={{ marginTop: 20 }}>Test Date: {toeflScore.testDate}</p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(TOEFL, 'app__toefl'),
  'toefl',
  'app__whitebg'
)
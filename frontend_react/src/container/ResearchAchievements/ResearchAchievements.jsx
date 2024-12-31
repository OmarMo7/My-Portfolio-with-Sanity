import React from 'react'
import './ResearchAchievements.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'

const ResearchAchievements = () => {
  const researchItems = [
    {
      title: 'Springer Nature Publish',
      description: 'Published on Springer\'s website as a conference paper in the proceedings of *World Conference on Information Systems and Technologies*',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-60227-6_10',
      imgUrl: images.springer
    },
    {
      title: 'ScienceDirect Publish',
      description: `Published on Elsevier's website and hosted on ScienceDirect as an article for *Egyptian Informatics Journal*`,
      link: 'https://www.sciencedirect.com/science/article/pii/S1110866524001580',
      imgUrl: images.seveir
    }
  ]

  return (
    <>
      <h2 className='head-text'>Research Achievements</h2>
      <h4 className='p-text'>
        Contributed to the authorization of a research paper on the intersection of
        Reinforcement Learning and Process Mining applications.
      </h4>

      <div className='app__profiles'>
        {researchItems.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item-research'
            key={item.title + index}
            onClick={() => window.open(item.link, '_blank')}
          >
            <img src={item.imgUrl} alt={item.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{item.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(ResearchAchievements, 'app__research'),
  'research',
  'app__whitebg'
)

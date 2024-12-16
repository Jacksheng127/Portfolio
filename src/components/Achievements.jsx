import React from 'react'
import { ACHEIVEMENTS } from '../constants'
import { motion } from "framer-motion"


const Achievements = () => {
  return (
    <section id = "achievement">
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='my-20 text-center text-4xl'>Achievements</motion.h2>
        <div>
            {ACHEIVEMENTS.map((achievement, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        <img 
                            src={achievement.image} 
                            width={150} 
                            height={150} 
                            alt={achievement.title} 
                            className="mb-6 rounded-md cursor-pointer"
                            onClick={() => openModal(achievement.image)}/>
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{achievement.title}</h6>
                        <p className='mb-4 text-neutral-400'>{achievement.description}</p>
                        {achievement.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
            {/* {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative">
                <button
                  className="absolute top-0 right-0 m-4 text-white text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img 
                  src={selectedImage} 
                  alt="Enlarged" 
                  className={`cursor-pointer transition-all duration-300 ${isImageEnlarged ? 'max-w-3/4 max-h-3/4' : 'max-w-full max-h-full'}`} 
                  onClick={toggleImageSize}
                />
              </div>
            </div>
          )} */}
        </div>
    </div>
    </section>
  )
}

export default Achievements
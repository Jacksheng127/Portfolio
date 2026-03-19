import { SiApacheairflow } from "react-icons/si"
import { SiTerraform } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi"
import { SiDocker } from "react-icons/si";
import { SiGoland } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDbt } from "react-icons/si";
import { motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
  return (
    <section id = "tech">
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiApacheairflow className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDocker  className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTerraform className="text-7xl text-purple-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiKubernetes className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGoland className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAmazonaws className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDatadog className="text-7xl text-purple-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDbt className="text-7xl text-orange-600"/>
            </motion.div>
        </motion.div>
    </div>
    </section>
  )
}

export default Technologies
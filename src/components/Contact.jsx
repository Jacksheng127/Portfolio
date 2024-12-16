import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id = "contact">
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-10 text-center text-4xl">Contact</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="flex-wrap my-4 text-xl whitespace-pre-line">
                    I'm currently looking for positions, primarily in Software Engineering.<br />
                    If you'd like to know more about me, interested to work with me or just want to say hi, feel free to contact me!
            </motion.p>
            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="my-4 text-xl">{CONTACT.phoneNo}</motion.p>
            <motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                href={`mailto:${CONTACT.email}`} 
                className="text-xl mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 my-4">
                CONTACT ME
            </motion.a>
            <motion.a>
            <div className="flex justify-center gap-10 mt-6">
                <a href="https://www.linkedin.com/in/jack-sheng-lim-7148b6254/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-4xl hover:text-blue-500" />
                </a>
                <a href="https://github.com/Jacksheng127" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com/jack_sheng_127/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl hover:text-blue-500" />
                </a>
            </div>
            </motion.a>
        </div>
    </div>
    </section>
  )
}

export default Contact
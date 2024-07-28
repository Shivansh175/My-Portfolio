import { motion } from "framer-motion";
function Header()
{
    return(
        <div className="w-full h-fit text-white">
            <nav className="w-full flex justify-center px-6 py-4">
                <motion.div
                    animate={{ y: [-30,0], opacity:[0,0,1]}}
                    // delay={2}
                    transition={{duration:2}}
                >
                    <ul className="flex gap-12 p-4 px-6 text-lg">
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact Me</li>
                    </ul>
                </motion.div>
            </nav>
        </div>
    )
}

export default Header;
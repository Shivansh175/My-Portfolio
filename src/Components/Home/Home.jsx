import OrangeOutfit from "../../Assets/Blue.png"
import { motion } from "framer-motion";

function Home(){
    return(
        <div className=" w-full h-fit flex flex-row pt-10 px-36  border-2 border-white ">
            
            {/* #FB8022 */}
                <div className="w-2/3 h-full p-6 justify-center flex flex-col items-start self-center gap-10 flex-wrap">
                    <div className="flex flex-col gap-2">
                        <h1 id="name"
                            className="text-6xl font-bold text-white flex gap-3"
                            > 
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.1}}>
                                <span>Hello,</span>
                            </motion.div>
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.3}}>
                                <span>I&apos;m</span>
                            </motion.div>
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.5}}>
                                <span className="text-[#FFA500]">Shivansh</span>
                            </motion.div>
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.7}}>
                                <span className="text-[#FFA500]">Goel</span>
                            </motion.div> 
                        </h1>
                        <h2 className="flex text-4xl font-bold text-[#ECEBF1] gap-2 w-fit">
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.1}}>
                                <span> I&apos;m</span>
                            </motion.div>
                            <motion.div animate={{ y: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.3}}>
                                <span>a</span> 
                            </motion.div>
                            <motion.div animate={{ x: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.6}}>
                                <span>Web</span>
                            </motion.div>
                            <motion.div animate={{ x: [-1000,0], opacity:[0,0,1]}}
                            transition={{duration:2, ease:"easeOut",delay:0.9}}>
                                <span>Developer</span> 
                            </motion.div>
                        </h2>
                    </div>

                    

                    <motion.div
                    animate={{ x: [-1000,0], opacity:[0,0,1]}}
                    transition={{duration:2, ease:"easeOut"}}
                    >
                        <button className="text-white p-3 px-6 text-lg rounded-full bg-[#FB8022]">
                            Let&apos;s Connect
                        </button>
                    </motion.div>
                </div>
            <motion.div 
                    className="w-1/3 "
                    animate={{ x: [100,0], opacity:[0,0,1]}}
                    transition={{duration:2,ease:"easeOut"}}
                    >
                <img 
                className="w-full "
                src={OrangeOutfit} />
            </motion.div>
        </div>
    )
}
export default Home;
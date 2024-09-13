import { AnimatePresence,motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Hero() {
    useGSAP(()=>{
        gsap.fromTo("#text",{
         opacity:0,
         y:20,
        },{
         opacity:1,
         y:0,
         delay:1,
         stagger:0.5,
        })
     },[])
     
    return (
        <AnimatePresence>
        <motion.section className="flex flex-col gap-10">
         <motion.div className="flex flex-row gap-10 max-sm:gap-5 max-md:flex-wrap">
           <motion.div className="p-10">
             <h1 id="text" className="text-white font-extrabold text-5xl ml-16 max-sm:ml-2 max-sm:text-3xl max-w-[300px]">
               Modern Furniture
             </h1>
             <h1 id="text" className="text-white font-extrabold text-5xl ml-16 max-sm:ml-2 max-sm:text-3xl max-w-[300px]">
           Designed with expert 
             </h1>
             <h1 id="text"className="text-white font-extrabold text-5xl ml-16 max-sm:ml-1 max-sm:text-3xl max-w-[300px]">
            craftsmanship
             </h1> 
           </motion.div>
           <motion.div className="p-4 ml-7">
            <img
             src="/images/IMG_6.png"
             alt="Red Sofa"
             className="z-10 h-[400px] w-[550px] max-md:h-[400px] max-md:w-[490px]"
            />
           </motion.div>
         </motion.div>
        </motion.section>
        </AnimatePresence>
    );
}

export default Hero;
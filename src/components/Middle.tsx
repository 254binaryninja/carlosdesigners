import {AnimatePresence,motion} from  "framer-motion";
import Showroom from "./showroom";
import { slideAnimation } from "@/assets/config/motion";
function Middle() {
    return (
        <AnimatePresence>
        <motion.div className="bg-white  px-14 flex flex-row max-sm:flex-wrap">
          <motion.div {...slideAnimation("up")} className="max-w-[350px] flex flex-col gap-4">
            <motion.div className="p-7 m-5">
            <h1 className="text-3xl font-bold text-amber-600">
             Crafted with excellent materials
            </h1>
            </motion.div>
            <motion.div className="p-7 ml-9">
             <p className="text-black font-medium text-xl">
                Get quality furniture from our store at affordable prices and designed with  the best quality materials.
                <strong>You dream it we build It</strong>
             </p>
            </motion.div>
          </motion.div>
          <motion.div {...slideAnimation("down")}>
            <Showroom/>
          </motion.div>
        </motion.div>
        </AnimatePresence>
    );
}

export default Middle;
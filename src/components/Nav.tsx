import { cn } from "@/lib/utils";
import { useEffect ,useState} from "react"

import Modal from "./contactModal";

const Nav = () => {

    const [isScrolled,setScrolled] = useState<boolean>(false);

    useEffect(()=>{
       const handleScroll = ()=>{
         if(window.scrollY > 0){
            setScrolled(true)
         }else{
            setScrolled(false)
         }
       } 
       window.addEventListener('scroll',handleScroll)
       return()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <div className={cn("flex-between sticky  left-0 top-0 right-0 px-6 py-2 lg:px-10",{
        "glassmorphism z-10":isScrolled,
        "bg-transparent":!isScrolled
    })}>
      <div className="m-2 px-3 max-sm:px-1">
       <h1 className="text-black font-bold text-5xl max-sm:text-3xl">Carlos Designers</h1>
      </div>
      <div className="max-sm:hidden p-4 mx-3">
         <Modal
          buttonTitle="Get a quote"
         />
      </div>
    </div>
  )
}

export default Nav

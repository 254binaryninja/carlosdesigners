import { Button } from "./ui/button"




const Contact = ({title}:{title:string}) => {
  return (
    <Button className="rounded-full p-4 text-white">
        {title}
    </Button>
  )
}

export default Contact

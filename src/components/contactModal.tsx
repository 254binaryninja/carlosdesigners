import Contact from "./quote"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone,Mail } from "lucide-react"

const Modal = ({buttonTitle}:{buttonTitle:string}) => {
  return (
<Dialog>
  <DialogTrigger>
    <Contact
     title={buttonTitle}
    />
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Contact us for more Info?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default Modal

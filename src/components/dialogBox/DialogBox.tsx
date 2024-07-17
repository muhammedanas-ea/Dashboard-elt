import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "../ui/button";

const DialogBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="default" size="sm">
          join now <FiExternalLink size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <DialogTrigger>
            <Button variant="ghost" size="sm" type="submit">
              close
            </Button>
          </DialogTrigger>
          <Button variant="default" size="sm" type="submit">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;

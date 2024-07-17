import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import moment from "moment";

const DialogBox = ({
  classData,
  updateClassAction,
}: {
  classData: number;
  updateClassAction: (id: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    fetch(`http://localhost:8000/upcomingClassesData/${classData}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: moment(new Date()).format("MMM Do YY") }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateClassAction(data.id);
        setIsOpen(false);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="w-full text-black font-bold dark:text-white" variant="outline" size="sm">
          Book now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="dark:text-white">
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <DialogTrigger>
            <Button
              className="dark:text-white"
              variant="ghost"
              size="sm"
              type="submit"
            >
              close
            </Button>
          </DialogTrigger>
          <Button
            className="dark:text-white"
            variant="default"
            size="sm"
            type="submit"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;

"use client";
import { useState } from "react";
import { Button, Modal } from "tron-ui";
import "tron-ui/dist/styles.css";
const Page = () => {
  const [open, setopen] = useState(false);

  const toggleModal = () => {
    setopen((prev) => !prev);
  };
  return (
    <div className="p-6">
      <Button onClick={toggleModal} color="error">
        hello
      </Button>
      <Modal onClose={toggleModal} open={open}>
        <div>hello</div>
      </Modal>
    </div>
  );
};
export default Page;

import {
  Dialog as AriaDialog,
  DialogProps,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Card } from "./card";

export { DialogTrigger } from "react-aria-components";

export function Dialog(props: DialogProps) {
  return (
    <ModalOverlay
      className="fixed inset-0 grid place-items-center bg-black/5 backdrop-blur-sm entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      isDismissable
    >
      <Modal className="entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95">
        <Card>
          <AriaDialog
            {...props}
            className={twMerge("outline-none", props.className)}
          />
        </Card>
      </Modal>
    </ModalOverlay>
  );
}

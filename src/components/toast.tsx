import { AriaToastProps, useToast, useToastRegion } from "@react-aria/toast";
import { ToastQueue, ToastState, useToastQueue } from "@react-stately/toast";
import { useRef } from "react";
import { createPortal } from "react-dom";

import { Button } from "./button";

interface ToastData {
  title: string;
  message: string;
}

const toastQueue = new ToastQueue<ToastData>({
  maxVisibleToasts: 5,
  hasExitAnimation: true,
});

export function toast(title: string, message: string) {
  toastQueue.add(
    { title, message },
    {
      timeout: 5000,
    },
  );
}

export function Toaster() {
  let state = useToastQueue(toastQueue);

  if (state.visibleToasts.length === 0) {
    return null;
  }

  return createPortal(<ToastRegion state={state} />, document.body);
}

function ToastRegion({ state }: { state: ToastState<ToastData> }) {
  let ref = useRef(null);
  let { regionProps } = useToastRegion({}, state, ref);

  return (
    <div
      {...regionProps}
      ref={ref}
      className="fixed bottom-4 right-4 flex flex-col gap-2 outline-none"
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}

function Toast({
  state,
  ...props
}: AriaToastProps<ToastData> & { state: ToastState<ToastData> }) {
  let ref = useRef(null);
  let { toastProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref,
  );

  return (
    <div
      {...toastProps}
      ref={ref}
      className="rounded-lg border border-slate-200 bg-white px-5 py-3 shadow data-[animation=entering]:duration-300 data-[animation=exiting]:duration-300 data-[animation=queued]:duration-300 data-[animation=entering]:animate-in data-[animation=queued]:animate-in data-[animation=exiting]:animate-out data-[animation=entering]:slide-in-from-bottom data-[animation=exiting]:slide-out-to-right data-[animation=queued]:slide-in-from-bottom"
      // Use a data attribute to trigger animations in CSS.
      data-animation={props.toast.animation}
      onAnimationEnd={() => {
        // Remove the toast when the exiting animation completes.
        if (props.toast.animation === "exiting") {
          state.remove(props.toast.key);
        }
      }}
    >
      <div className="mb-1 flex items-center justify-between gap-4">
        <div {...titleProps} className="text-lg font-medium">
          {props.toast.content.title}
        </div>
        <Button
          {...closeButtonProps}
          color="ghost"
          className="-mr-2 -mt-0.5 grid p-0.5"
        >
          <div className="i-tabler-x size-6" />
        </Button>
      </div>
      <div className="text-pretty">{props.toast.content.message}</div>
    </div>
  );
}

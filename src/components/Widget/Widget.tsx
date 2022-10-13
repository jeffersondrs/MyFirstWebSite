import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm/Index";

export default function Widget() {
  return (
    <Popover className="fixed bottom-1 right-1 md:botton-1 lg:right-1 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />{" "}
      </Popover.Panel>
      <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-3"></span> Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

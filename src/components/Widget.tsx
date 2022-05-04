import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className="absolute right-5 bottom-5">
      <Popover.Panel>Hello World!</Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full p-4 text-white flex items-center group">
        <ChatTeardropDots className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

export default Widget
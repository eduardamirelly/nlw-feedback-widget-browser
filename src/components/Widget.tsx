import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
  return (
    <div className="absolute right-5 bottom-5">
      <button className="bg-brand-500 rounded-full p-4 text-white flex items-center group">
        <ChatTeardropDots className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  )
}

export default Widget
import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="absolute right-5 bottom-5">
      { isWidgetOpen && <p>Hello World!</p> }

      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full p-4 text-white flex items-center group">
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
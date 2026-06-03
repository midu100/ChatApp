import { Smile, Paperclip, Mic, Aperture, SendHorizontal } from 'lucide-react'

/**
 * MessageInput - Fully static input bar matching the mockup
 */
const MessageInput = () => {
  return (
    <div className="relative bg-white border-t border-border-subtle z-10 px-4 py-3 shrink-0">
      <div className="flex items-center gap-3">
        {/* Left - Attachment */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all duration-200 cursor-pointer">
          <Paperclip size={21} strokeWidth={2} />
        </div>

        {/* Center - Input pill */}
        <div className="flex-1 bg-white border border-border-default/80 rounded-full px-5 py-2 flex items-center shadow-sm">
          <input
            type="text"
            placeholder="Type your message and press enter..."
            className="w-full bg-transparent outline-none text-sm text-text-primary placeholder:text-text-muted py-1"
          />
        </div>

        {/* Right - Camera, Mic, Emoji & Send Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all duration-200 cursor-pointer">
            <Aperture size={21} strokeWidth={2} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all duration-200 cursor-pointer">
            <Mic size={21} strokeWidth={2} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all duration-200 cursor-pointer">
            <Smile size={21} strokeWidth={2} />
          </div>
          
          {/* Uiverse/CodePen Premium Send Button */}
          <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-rose-500 text-white rounded-full shadow-[0_4px_12px_rgba(234,56,77,0.35)] hover:shadow-[0_6px_18px_rgba(234,56,77,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group">
            <SendHorizontal size={18} className="translate-x-[1px] group-hover:translate-x-[2.5px] group-hover:-translate-y-[1px] transition-transform duration-300" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageInput

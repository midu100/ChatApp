import Avatar from './common/Avatar'
import { CheckCheck } from 'lucide-react'

/**
 * MessageArea - Fully static message area with hardcoded messages matching the mockup
 */
const MessageArea = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar py-4 bg-[#f3f4f6]/50">
      {/* Encryption notice */}
      <div className="flex justify-center mb-4">
        <div className="bg-white/90 shadow-sm border border-border-default/40 text-text-muted text-[11px] px-4 py-1.5 rounded-full flex items-center gap-1.5 font-medium">
          <span>🔒</span>
          Messages are end-to-end encrypted. No one outside of this chat can read them.
        </div>
      </div>

      {/* Date separator */}
      <div className="flex justify-center my-3">
        <span className="bg-white/95 border border-border-default/50 shadow-sm text-text-muted text-xs px-3 py-1 rounded-full font-medium">
          Today
        </span>
      </div>

      {/* Time label */}
      <div className="flex justify-start px-16 mb-1">
        <span className="text-[11px] text-text-muted">Today 7.00 am</span>
      </div>

      {/* Message 1 - Incoming: "Dude this thing we are trying" */}
      <div className="flex items-end gap-2.5 px-4 justify-start mt-2 animate-fade-in">
        <div className="w-8 shrink-0 flex justify-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Chole Adams" className="w-8 h-8 rounded-full object-cover" />
        </div>
        <div className="relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm bg-bubble-received text-text-primary rounded-bl-none border border-border-subtle/50">
          <p className="text-[14.5px] leading-relaxed">Dude this thing we are trying</p>
        </div>
      </div>

      {/* Message 2 - Incoming: "will be the best failure in design" */}
      <div className="flex items-end gap-2.5 px-4 justify-start mt-1 animate-fade-in">
        <div className="w-8 shrink-0" />
        <div className="relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm bg-bubble-received text-text-primary rounded-bl-none border border-border-subtle/50">
          <p className="text-[14.5px] leading-relaxed">will be the best failure in design</p>
        </div>
      </div>

      {/* Message 3 - Outgoing: "But if we leave like we don't care..." */}
      <div className="flex items-end gap-2.5 px-4 justify-end mt-4 animate-fade-in">
        <div className="relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm bg-bubble-sent text-white rounded-br-none">
          <p className="text-[14.5px] leading-relaxed">But if we leave like we don&apos;t care we can&apos;t design stuffs girl don&apos;t care about criticism</p>
          <div className="flex items-center justify-end gap-1 mt-1.5">
            <span className="text-[10px] text-white/70 leading-none">Today 7.01 am</span>
            <CheckCheck size={14} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="w-8 shrink-0 flex justify-center">
          <Avatar name="Midu" size="sm" showStatus={false} />
        </div>
      </div>

      {/* Message 4 - Outgoing: "I already published it 🙄" */}
      <div className="flex items-end gap-2.5 px-4 justify-end mt-1 animate-fade-in">
        <div className="relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm bg-bubble-sent text-white rounded-br-none">
          <p className="text-[14.5px] leading-relaxed">I already published it 🙄</p>
          <div className="flex items-center justify-end gap-1 mt-1.5">
            <span className="text-[10px] text-white/70 leading-none">Today 7.01 am</span>
            <CheckCheck size={14} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="w-8 shrink-0" />
      </div>

      {/* Time label */}
      <div className="flex justify-start px-16 mb-1 mt-4">
        <span className="text-[11px] text-text-muted">Today 7.02 am</span>
      </div>

      {/* Message 5 - Incoming: "Hey Did you just ......" */}
      <div className="flex items-end gap-2.5 px-4 justify-start mt-2 animate-fade-in">
        <div className="w-8 shrink-0 flex justify-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Chole Adams" className="w-8 h-8 rounded-full object-cover" />
        </div>
        <div className="relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm bg-bubble-received text-text-primary rounded-bl-none border border-border-subtle/50">
          <p className="text-[14.5px] leading-relaxed">Hey Did you just ......</p>
        </div>
      </div>

      {/* Typing Indicator */}
      <div className="flex items-end gap-2.5 px-4 justify-start mt-3 animate-fade-in">
        <div className="w-8 shrink-0" />
        <div className="bg-bubble-received rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-border-subtle/50 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-text-muted animate-pulse-dot" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-text-muted animate-pulse-dot" style={{ animationDelay: '200ms' }} />
            <div className="w-2 h-2 rounded-full bg-text-muted animate-pulse-dot" style={{ animationDelay: '400ms' }} />
          </div>
          <span className="text-xs text-text-muted ml-1">Typing...</span>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-4" />
    </div>
  )
}

export default MessageArea

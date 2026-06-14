import Avatar from './common/Avatar'
import { Phone, Video, MoreVertical } from 'lucide-react'

/**
 * ChatHeader - Fully static header showing Chole Adams as active contact
 */
const ChatHeader = ({ selectedConvo }) => {
  return (
    <div className="h-[65px] bg-surface-panel flex items-center justify-between px-4 border-b border-border-subtle shrink-0">
      {/* Left - Contact Info */}
      <div className="flex items-center gap-3 cursor-pointer">
        <Avatar name={selectedConvo?.fullName || "Chat"} image={selectedConvo?.avatar} size="md" showStatus={true} isOnline={true} />
        <div>
          <h2 className="text-[16px] font-semibold text-text-primary leading-tight">
            {selectedConvo?.fullName || "Chat"}
          </h2>
          <p className="text-xs mt-0.5">
            <span className="text-primary font-medium">online now</span>
          </p>
        </div>
      </div>

      {/* Right - Action Buttons */}
      <div className="flex items-center gap-1.5">
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer">
          <Phone size={20} strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer">
          <Video size={20} strokeWidth={2} />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all duration-200 cursor-pointer">
          <MoreVertical size={20} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader

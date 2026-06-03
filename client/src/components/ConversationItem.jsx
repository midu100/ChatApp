import Avatar from './common/Avatar'
import { Check, CheckCheck, Image, Mic, Video } from 'lucide-react'

/**
 * ConversationItem - Single conversation row in the sidebar list
 */
const ConversationItem = ({ conversation, isActive, onClick }) => {
  const { name, lastMessage, time, unreadCount, isOnline, image, isTyping, messageType, isSent } =
    conversation

  // Render last message with type icon
  const renderLastMessage = () => {
    if (isTyping) {
      return <span className="text-primary italic">typing...</span>
    }

    let icon = null
    if (messageType === 'image') icon = <Image size={14} className="shrink-0" />
    if (messageType === 'voice') icon = <Mic size={14} className="shrink-0" />
    if (messageType === 'video') icon = <Video size={14} className="shrink-0" />

    return (
      <span className="flex items-center gap-1">
        {isSent && (
          <CheckCheck
            size={16}
            className={`shrink-0 ${unreadCount === 0 ? 'text-accent' : 'text-text-muted'}`}
          />
        )}
        {icon}
        <span className="truncate">{lastMessage}</span>
      </span>
    )
  }

  return (
    <button
      id={`conversation-${conversation.id}`}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-3 transition-all duration-150 hover:bg-surface-hover cursor-pointer group ${
        isActive ? 'bg-surface-active' : ''
      }`}
    >
      <Avatar name={name} image={image} isOnline={isOnline} size="md" />

      <div className="flex-1 min-w-0 border-b border-border-subtle pb-3 group-last:border-0">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="text-[15px] font-medium text-text-primary truncate">{name}</h3>
          <span
            className={`text-xs shrink-0 ml-2 ${
              unreadCount > 0 ? 'text-unread font-medium' : 'text-text-muted'
            }`}
          >
            {time}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-text-secondary truncate flex-1">{renderLastMessage()}</p>
          {unreadCount > 0 && (
            <span className="ml-2 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-unread text-white text-[11px] font-bold px-1.5 animate-scale-in">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

export default ConversationItem

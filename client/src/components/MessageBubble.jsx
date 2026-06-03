import Avatar from './common/Avatar'
import { Check, CheckCheck } from 'lucide-react'

/**
 * MessageBubble - Individual chat message bubble with avatar alignment matching the mockup
 */
const MessageBubble = ({ message, isConsecutive, conversation }) => {
  const { text, time, isSent, isRead, isDelivered, replyTo } = message

  // Contact avatar and name from the active conversation
  const contactName = conversation?.name || 'Contact'
  const contactImage = conversation?.image

  return (
    <div
      className={`flex items-end gap-2.5 px-4 ${
        isSent ? 'justify-end' : 'justify-start'
      } ${isConsecutive ? 'mt-1' : 'mt-4'} animate-fade-in`}
    >
      {/* Incoming Avatar / Spacer */}
      {!isSent && (
        <div className="w-8 shrink-0 flex justify-center">
          {!isConsecutive ? (
            <Avatar name={contactName} image={contactImage} size="sm" showStatus={false} />
          ) : (
            <div className="w-8 h-8" />
          )}
        </div>
      )}

      {/* Message Card */}
      <div
        className={`relative max-w-[65%] rounded-2xl px-4 py-2.5 shadow-sm ${
          isSent
            ? 'bg-bubble-sent text-white rounded-br-none'
            : 'bg-bubble-received text-text-primary rounded-bl-none border border-border-subtle/50'
        }`}
      >
        {/* Reply reference */}
        {replyTo && (
          <div className="mb-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border-l-3 border-primary">
            <p className="text-xs text-primary font-medium">{replyTo.sender}</p>
            <p className="text-xs text-text-secondary truncate">{replyTo.text}</p>
          </div>
        )}

        {/* Message text */}
        <p className="text-[14.5px] leading-relaxed break-words whitespace-pre-wrap">{text}</p>

        {/* Time and status */}
        <div className="flex items-center justify-end gap-1 mt-1.5">
          <span className={`text-[10px] leading-none ${isSent ? 'text-white/70' : 'text-text-muted'}`}>
            {time}
          </span>
          {isSent && (
            <span className="ml-0.5 shrink-0">
              {isRead ? (
                <CheckCheck size={14} className="text-white" />
              ) : isDelivered ? (
                <CheckCheck size={14} className="text-white/60" />
              ) : (
                <Check size={14} className="text-white/60" />
              )}
            </span>
          )}
        </div>
      </div>

      {/* Outgoing Avatar / Spacer */}
      {isSent && (
        <div className="w-8 shrink-0 flex justify-center">
          {!isConsecutive ? (
            <Avatar name="Midu" size="sm" showStatus={false} />
          ) : (
            <div className="w-8 h-8" />
          )}
        </div>
      )}
    </div>
  )
}

export default MessageBubble

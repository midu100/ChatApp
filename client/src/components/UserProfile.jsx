import Avatar from './common/Avatar'
import {
  X,
  Bell,
  Star,
  Lock,
  Clock,
  Trash2,
  Ban,
  ThumbsDown,
  ChevronRight,
  Image,
  FileText,
  Link,
} from 'lucide-react'

/**
 * UserProfile - Right-side profile panel showing user details
 */
const UserProfile = ({ conversation, onClose }) => {
  if (!conversation) return null

  const mediaItems = [
    { label: 'Photos', count: 24, icon: Image },
    { label: 'Files', count: 8, icon: FileText },
    { label: 'Links', count: 15, icon: Link },
  ]

  const settingsItems = [
    { icon: Bell, label: 'Mute notifications', hasToggle: true },
    { icon: Star, label: 'Starred messages', hasArrow: true },
    { icon: Lock, label: 'Encryption', desc: 'Messages are end-to-end encrypted', hasArrow: true },
    { icon: Clock, label: 'Disappearing messages', desc: 'Off', hasArrow: true },
  ]

  const dangerItems = [
    { icon: Ban, label: `Block ${conversation.name}`, color: 'text-red-400' },
    { icon: ThumbsDown, label: `Report ${conversation.name}`, color: 'text-red-400' },
    { icon: Trash2, label: 'Delete chat', color: 'text-red-400' },
  ]

  return (
    <div className="w-[380px] bg-surface-panel border-l border-border-subtle flex flex-col animate-slide-left">
      {/* Header */}
      <div className="h-[65px] flex items-center gap-4 px-5 border-b border-border-subtle shrink-0">
        <button
          id="close-profile"
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full text-text-muted hover:bg-surface-hover hover:text-text-secondary transition-all"
        >
          <X size={20} />
        </button>
        <h2 className="text-base font-semibold text-text-primary">Contact info</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Profile Section */}
        <div className="flex flex-col items-center py-8 bg-surface-panel">
          <Avatar name={conversation.name} image={conversation.image} size="xl" isOnline={conversation.isOnline} />
          <h3 className="text-xl font-semibold text-text-primary mt-4">{conversation.name}</h3>
          <p className="text-sm text-text-secondary mt-1">
            {conversation.phone || '+880 1234-567890'}
          </p>
          {conversation.isOnline && (
            <span className="text-xs text-primary font-medium mt-1">Online</span>
          )}
        </div>

        {/* About */}
        <div className="px-5 py-4 border-t border-border-subtle/50 bg-surface-panel">
          <p className="text-xs text-text-muted mb-1 uppercase tracking-wider font-medium">About</p>
          <p className="text-sm text-text-primary">
            {conversation.about || 'Hey there! I am using ChatApp 🚀'}
          </p>
        </div>

        {/* Media, Files, Links */}
        <div className="px-5 py-4 border-t-8 border-surface-dark">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium">
              Media, files and links
            </p>
            <button className="text-xs text-primary font-medium hover:underline">
              See all
            </button>
          </div>
          <div className="flex gap-2">
            {mediaItems.map((item) => (
              <button
                key={item.label}
                className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl bg-surface-hover hover:bg-surface-active transition-colors"
              >
                <item.icon size={18} className="text-text-muted" />
                <span className="text-xs text-text-secondary">{item.count}</span>
                <span className="text-[10px] text-text-muted">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="border-t-8 border-surface-dark">
          {settingsItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-surface-hover transition-colors"
            >
              <item.icon size={18} className="text-text-muted shrink-0" />
              <div className="flex-1 text-left">
                <p className="text-sm text-text-primary">{item.label}</p>
                {item.desc && (
                  <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                )}
              </div>
              {item.hasArrow && <ChevronRight size={16} className="text-text-muted" />}
              {item.hasToggle && (
                <div className="w-10 h-5 rounded-full bg-surface-active relative cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-text-muted absolute top-0.5 left-0.5 transition-transform" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="border-t-8 border-surface-dark pb-6">
          {dangerItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-surface-hover transition-colors"
            >
              <item.icon size={18} className={`shrink-0 ${item.color}`} />
              <p className={`text-sm ${item.color}`}>{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile

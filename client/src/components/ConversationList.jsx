import Avatar from './common/Avatar'
import { Search, MessageSquare, Settings, CheckCheck } from 'lucide-react'

/**
 * ConversationList - Fully static left panel with hardcoded conversations
 */
const ConversationList = () => {
  return (
    <div className="w-[340px] bg-surface-panel flex flex-col border-r border-border-subtle h-full">
      {/* User Profile Header */}
      <div className="px-4 py-3 bg-surface-hover flex items-center justify-between border-b border-border-subtle shrink-0">
        <div className="flex items-center gap-3">
          <Avatar name="Midu" size="sm" showStatus={true} isOnline={true} />
          <div>
            <h2 className="text-sm font-semibold text-text-primary leading-tight">Midu</h2>
            <p className="text-[11px] text-primary font-semibold">My Profile</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="p-1.5 text-text-muted hover:text-text-secondary hover:bg-surface-active rounded-full transition-colors cursor-pointer">
            <MessageSquare size={18} />
          </div>
          <div className="p-1.5 text-text-muted hover:text-text-secondary hover:bg-surface-active rounded-full transition-colors cursor-pointer">
            <Settings size={18} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3.5 flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">Chats</h1>
        <span className="text-xs text-text-muted bg-surface-hover px-2.5 py-0.5 rounded-full font-semibold">
          8 conversations
        </span>
      </div>

      {/* Search */}
      <div className="px-4 py-2 shrink-0 border-b border-border-subtle">
        <div className="flex items-center gap-3 rounded-full px-4 py-1.5 bg-surface-hover border border-transparent">
          <Search size={16} className="shrink-0 text-text-muted" />
          <input
            type="text"
            placeholder="Search"
            readOnly
            className="w-full bg-transparent text-sm text-text-primary placeholder-text-muted outline-none py-0.5 cursor-default"
          />
        </div>
        <div className="flex gap-2 mt-2.5 mb-1 px-1">
          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">All</span>
          <span className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary font-medium cursor-pointer hover:bg-surface-active transition-colors">Unread</span>
          <span className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary font-medium cursor-pointer hover:bg-surface-active transition-colors">Groups</span>
        </div>
      </div>

      {/* Static Conversation Items */}
      <div className="flex-1 overflow-y-auto no-scrollbar mt-1">

        {/* 1. Chole Adams - Active + Unread */}
        <div className="w-full flex items-center gap-3 px-3 py-3 bg-surface-active cursor-pointer">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Chole Adams" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full bg-online border-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Chole Adams</h3>
              <span className="text-xs shrink-0 ml-2 text-unread font-medium">Just now</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">
                <span className="text-primary italic">typing...</span>
              </p>
              <span className="ml-2 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-unread text-white text-[11px] font-bold px-1.5">1</span>
            </div>
          </div>
        </div>

        {/* 2. Amin Rokhead */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt="Amin Rokhead" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Amin Rokhead</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>11:08 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">can you send it to me</p>
            </div>
          </div>
        </div>

        {/* 3. Zareena */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Zareena" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Zareena</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>10:59 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">You are a ****</p>
            </div>
          </div>
        </div>

        {/* 4. Ashton */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Ashton" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Ashton</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>10:08 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">
                <span className="flex items-center gap-1">
                  <CheckCheck size={16} className="shrink-0 text-accent" />
                  <span className="truncate">dude this is crazy stuff</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 5. Ronda */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" alt="Ronda" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Ronda</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>10:00 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">Get some sleep *** head</p>
            </div>
          </div>
        </div>

        {/* 6. Joyce */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Joyce" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full bg-online border-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Joyce</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>9:48 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">lets meet tommorrow 😢</p>
            </div>
          </div>
        </div>

        {/* 7. Collins */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150" alt="Collins" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Collins</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>9:08 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">
                <span className="flex items-center gap-1">
                  <CheckCheck size={16} className="shrink-0 text-accent" />
                  <span className="truncate">You know it 😉</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 8. Manoj */}
        <div className="w-full flex items-center gap-3 px-3 py-3 hover:bg-surface-hover cursor-pointer transition-all duration-150">
          <div className="relative shrink-0">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150" alt="Manoj" className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-medium text-text-primary truncate">Manoj</h3>
              <span className="text-xs shrink-0 ml-2 text-text-muted">yesterday<br/>8:08 pm</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary truncate flex-1">This design sucks</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ConversationList

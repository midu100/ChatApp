import Avatar from './common/Avatar'
import {
  MessageCircle,
  Users,
  CircleDot,
  Settings,
  LogOut,
  Search,
  MessageSquare,
  CheckCheck,
} from 'lucide-react'
import { useNavigate } from 'react-router'
import { useGetConversationQuery } from '../lib/api'
import { useDispatch, useSelector } from 'react-redux'
import { activeConversation } from '../slices/ActiveConvSlice'

/**
 * SidebarNav - Left icon bar + Conversation list panel (merged)
 */
const SidebarNav = ({ profileData }) => {
  console.log('first:',profileData)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeConvo = useSelector((state) => state.activeConv.active)
  const user = profileData?.user
  const { data } = useGetConversationQuery()

  return (
    <div className="flex h-full shrink-0">
      {/* Left Icon Navigation Bar */}
      <div className="w-[72px] bg-green-800 flex flex-col items-center py-5 shadow-lg relative z-20 shrink-0">
        {/* User Profile Avatar + Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="p-0.5 rounded-full ring-2 ring-white scale-110 shadow-lg">
            <Avatar name={user?.fullName || "Midu"} image={user?.avatar} size="sm" showStatus={false} />
          </div>
          <span className="text-[10px] text-white/90 font-semibold tracking-wide mt-1.5 truncate max-w-[62px] text-center">
            {user?.fullName || "Midu"}
          </span>
        </div>

        {/* Navigation Icons */}
        <nav className="flex-1 flex flex-col items-center gap-3">
          {/* Chats - Active */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary shadow-lg scale-110 cursor-pointer">
            <MessageCircle size={22} strokeWidth={2.2} />
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-primary text-white text-[10px] font-black px-1 shadow-md">
              3
            </span>
          </div>

          {/* Status */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            <CircleDot size={22} strokeWidth={1.8} />
          </div>

          {/* Groups */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            <Users size={22} strokeWidth={1.8} />
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="flex flex-col items-center gap-3 mt-auto">
          {/* Settings */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            <Settings size={22} strokeWidth={1.8} />
          </div>

          {/* Logout */}
          <div 
            onClick={() => {
              document.cookie = "acc_tkn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
              document.cookie = "ref_tkn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
              navigate('/login')
            }}
            className="w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:bg-red-800/30 hover:text-red-100 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <LogOut size={20} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Conversation List Panel */}
      <div className="w-[340px] bg-surface-panel flex flex-col border-r border-border-subtle h-full">
        {/* User Profile Header */}
        <div className="px-4 py-3 bg-surface-hover flex items-center justify-between border-b border-border-subtle shrink-0">
          <div className="flex items-center gap-3">
            <Avatar
              name={user?.fullName || "Midu"}
              image={user?.avatar}
              size="sm"
              showStatus={true}
              isOnline={true}
            />
            <div>
              <h2 className="text-sm font-semibold text-text-primary leading-tight">
                {user?.fullName || "-"}
              </h2>
              <p className="text-[11px] text-primary font-semibold">
                {user?.email || "My Profile"}
              </p>
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
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">
              All
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary font-medium cursor-pointer hover:bg-surface-active transition-colors">
              Unread
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary font-medium cursor-pointer hover:bg-surface-active transition-colors">
              Groups
            </span>
          </div>
        </div>

        {/* Conversation Items */}
        <div className="flex-1 overflow-y-auto no-scrollbar mt-1">
          {data?.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                const partner = item?.creator?._id === user?._id ? item?.participant : item?.creator
                dispatch(activeConversation({ ...partner, convId: item?._id }))
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 cursor-pointer transition-colors duration-200 ${
                activeConvo?.convId === item?._id
                  ? 'bg-primary/10 border-l-2 border-l-primary'
                  : 'hover:bg-surface-hover'
              }`}
            >
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                  alt="Chole Adams"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-surface-panel"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full bg-online border-surface-panel" />
              </div>
              <div className="flex-1 min-w-0 border-b border-border-subtle pb-3">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-[15px] font-medium text-text-primary truncate">
                    {
                      item?.creator?._id == user?._id 
                      ?
                      item?.participant?.fullName 
                      :
                      item?.creator?.fullName
                    }
                  </h3>
                  <span className="text-xs shrink-0 ml-2 text-unread font-medium">
                    Just now
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-secondary truncate flex-1">
                    <span className="text-primary italic">{item?.lastMessage}</span>
                  </p>
                  <span className="ml-2 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-unread text-white text-[11px] font-bold px-1.5">
                    1
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarNav

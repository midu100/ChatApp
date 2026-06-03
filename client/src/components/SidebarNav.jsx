import Avatar from './common/Avatar'
import {
  MessageCircle,
  Users,
  CircleDot,
  Settings,
  LogOut,
} from 'lucide-react'

/**
 * Sidebar Navigation - Fully static left icon bar
 */
const SidebarNav = () => {
  return (
    <div className="w-[72px] bg-gradient-to-b from-primary to-primary-dark flex flex-col items-center py-5 shadow-lg relative z-20 shrink-0">
      {/* User Profile Avatar + Name */}
      <div className="flex flex-col items-center mb-6">
        <div className="p-0.5 rounded-full ring-2 ring-white scale-110 shadow-lg">
          <Avatar name="Midu" size="sm" showStatus={false} />
        </div>
        <span className="text-[10px] text-white/90 font-semibold tracking-wide mt-1.5 truncate max-w-[62px] text-center">
          Midu
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
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white/70 hover:bg-red-800/30 hover:text-red-100 transition-all duration-300 cursor-pointer hover:scale-105">
          <LogOut size={20} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  )
}

export default SidebarNav

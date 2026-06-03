import Avatar from './common/Avatar'
import { ArrowLeft, Camera, User, Info, Phone, ShieldCheck } from 'lucide-react'

/**
 * MyProfile - Displays the current user's profile details in the left list area
 */
const MyProfile = ({ currentUser, onBack }) => {
  return (
    <div className="w-[340px] bg-surface-panel flex flex-col border-r border-border-subtle h-full animate-fade-in">
      {/* Header */}
      <div className="px-4 py-5 bg-primary text-white flex items-center gap-4 shadow-sm shrink-0">
        <button
          onClick={onBack}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
          title="Back to chats"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-6 px-4 space-y-6">
        {/* Profile Pic Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group cursor-pointer">
            <Avatar name={currentUser.name} size="xl" showStatus={false} />
            <div className="absolute inset-0 bg-black/40 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Camera size={20} />
              <span className="text-[10px] mt-1 font-medium">CHANGE</span>
            </div>
          </div>
          <h2 className="text-text-primary font-semibold text-lg mt-3">{currentUser.name}</h2>
          <p className="text-text-muted text-xs flex items-center gap-1 mt-1">
            <ShieldCheck size={14} className="text-online" /> Verified Account
          </p>
        </div>

        {/* Name Info Card */}
        <div className="bg-surface-chat/50 rounded-2xl p-4 space-y-1.5 border border-border-subtle">
          <div className="flex items-center gap-2.5 text-primary">
            <User size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Your Name</span>
          </div>
          <p className="text-text-primary text-sm font-medium pl-6">{currentUser.name}</p>
          <p className="text-[11px] text-text-muted pl-6 leading-relaxed">
            This is not your username or pin. This name will be visible to your contacts.
          </p>
        </div>

        {/* About Info Card */}
        <div className="bg-surface-chat/50 rounded-2xl p-4 space-y-1.5 border border-border-subtle">
          <div className="flex items-center gap-2.5 text-primary">
            <Info size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">About</span>
          </div>
          <p className="text-text-primary text-sm pl-6 leading-relaxed">{currentUser.about || 'Available'}</p>
        </div>

        {/* Phone Info Card */}
        <div className="bg-surface-chat/50 rounded-2xl p-4 space-y-1.5 border border-border-subtle">
          <div className="flex items-center gap-2.5 text-primary">
            <Phone size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Phone Number</span>
          </div>
          <p className="text-text-primary text-sm pl-6 font-mono">{currentUser.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default MyProfile

import {
  ArrowLeft,
  Bell,
  Lock,
  Database,
  HelpCircle,
  Smartphone,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

/**
 * SettingsPanel - Displays settings list in the left area
 */
const SettingsPanel = ({ onBack }) => {
  const settingsOptions = [
    {
      icon: Bell,
      title: 'Notifications',
      desc: 'Mute, tone, priority settings',
      color: 'bg-rose-500/10 text-rose-500',
    },
    {
      icon: Lock,
      title: 'Privacy',
      desc: 'Blocked contacts, disappearing messages',
      color: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      icon: Database,
      title: 'Storage and Data',
      desc: 'Network usage, auto-download media',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: Smartphone,
      title: 'App Appearance',
      desc: 'Light, dark, custom chat wall papers',
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Aesthetics & Theme',
      desc: 'Customize colors, spacing & graphics',
      color: 'bg-amber-500/10 text-amber-500',
    },
    {
      icon: HelpCircle,
      title: 'Help & FAQ',
      desc: 'Help center, contact support, licenses',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
  ]

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
        <h1 className="text-lg font-semibold">Settings</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-4">
        {/* Banner */}
        <div className="mx-4 mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
            <span>✨</span> Pro Customizations Enabled
          </h2>
          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
            Personalize your workspace with bespoke styling and responsive controls.
          </p>
        </div>

        {/* Options List */}
        <div className="divide-y divide-border-subtle">
          {settingsOptions.map((opt, idx) => (
            <button
              key={idx}
              className="w-full flex items-center justify-between px-4 py-4 hover:bg-surface-hover transition-colors text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-9 h-9 rounded-xl ${opt.color} flex items-center justify-center shrink-0`}>
                  <opt.icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary">{opt.title}</h3>
                  <p className="text-xs text-text-muted truncate mt-0.5">{opt.desc}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-text-muted shrink-0 ml-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Footer Version */}
      <div className="p-4 border-t border-border-subtle text-center">
        <p className="text-[10px] text-text-muted tracking-wider uppercase font-semibold">Ghorer Bazar Chat</p>
        <p className="text-[9px] text-text-muted/60 mt-0.5">Version 1.4.2 - Production Build</p>
      </div>
    </div>
  )
}

export default SettingsPanel

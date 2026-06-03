import { MessageCircle, Lock } from 'lucide-react'

/**
 * EmptyChat - Placeholder when no conversation is selected
 */
const EmptyChat = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-surface-chat animate-fade-in">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
              <MessageCircle size={48} className="text-primary/60" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-primary/30 animate-pulse-dot" />
        <div className="absolute bottom-12 left-4 w-2 h-2 rounded-full bg-accent/40 animate-pulse-dot" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-20 left-8 w-2.5 h-2.5 rounded-full bg-primary-light/25 animate-pulse-dot" style={{ animationDelay: '1s' }} />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-light text-text-primary mb-3 tracking-tight">
        ChatApp for Desktop
      </h2>
      <p className="text-sm text-text-secondary max-w-md text-center leading-relaxed px-8">
        Send and receive messages without keeping your phone online.
        <br />
        Use ChatApp on up to 4 linked devices and 1 phone at the same time.
      </p>

      {/* Encryption notice */}
      <div className="flex items-center gap-2 mt-8 text-text-muted">
        <Lock size={13} />
        <span className="text-xs">End-to-end encrypted</span>
      </div>
    </div>
  )
}

export default EmptyChat

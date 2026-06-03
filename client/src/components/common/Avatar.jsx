/**
 * Avatar - Reusable avatar component with online status indicator
 */
const Avatar = ({ name, image, size = 'md', isOnline = false, showStatus = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-xl',
  }

  const statusSizeClasses = {
    sm: 'w-2.5 h-2.5 border-[1.5px]',
    md: 'w-3 h-3 border-2',
    lg: 'w-3.5 h-3.5 border-2',
    xl: 'w-4 h-4 border-2',
  }

  // Generate color from name
  const getColor = (name) => {
    const colors = [
      'from-emerald-400 to-teal-500',
      'from-violet-400 to-purple-500',
      'from-rose-400 to-pink-500',
      'from-amber-400 to-orange-500',
      'from-cyan-400 to-blue-500',
      'from-lime-400 to-green-500',
      'from-fuchsia-400 to-pink-600',
      'from-sky-400 to-indigo-500',
    ]
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
  }

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="relative shrink-0">
      {image ? (
        <img
          src={image}
          alt={name}
          className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-surface-panel`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${getColor(
            name
          )} flex items-center justify-center font-semibold text-white shadow-lg`}
        >
          {initials}
        </div>
      )}
      {showStatus && isOnline && (
        <div
          className={`absolute bottom-0 right-0 ${statusSizeClasses[size]} rounded-full bg-online border-surface-panel`}
        />
      )}
    </div>
  )
}

export default Avatar

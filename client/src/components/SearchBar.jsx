import { useState } from 'react'
import { Search } from 'lucide-react'

/**
 * SearchBar - Search input component for filtering conversations
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="px-4 py-2 shrink-0 border-b border-border-subtle">
      <div
        className={`flex items-center gap-3 rounded-full px-4 py-1.5 transition-all duration-200 ${
          isFocused
            ? 'bg-white border border-primary/45 shadow-sm'
            : 'bg-surface-hover border border-transparent'
        }`}
      >
        <Search
          size={16}
          className={`shrink-0 transition-colors duration-200 ${
            isFocused ? 'text-primary' : 'text-text-muted'
          }`}
        />
        <input
          id="search-conversations"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-sm text-text-primary placeholder-text-muted outline-none py-0.5"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-text-muted hover:text-text-primary text-base transition-colors px-1"
          >
            ×
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mt-2.5 mb-1 px-1">
        <button className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors">
          All
        </button>
        <button className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary hover:bg-surface-active transition-colors font-medium">
          Unread
        </button>
        <button className="px-3 py-1 text-xs rounded-full bg-surface-hover text-text-secondary hover:bg-surface-active transition-colors font-medium">
          Groups
        </button>
      </div>
    </div>
  )
}

export default SearchBar

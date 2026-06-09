import React from 'react'

const InputField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon: Icon, 
  required = false,
  ...rest 
}) => {
  return (
    <div>
      {label && (
        <label className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-1.5 block">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          required={required}
          className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  )
}

export default InputField

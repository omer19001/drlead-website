import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'amber' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-blue-500/10 border border-blue-500/20 text-sky-400',
    blue: 'bg-blue-600 text-white',
    green: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
    amber: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
    outline: 'border border-white/20 text-white/70',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

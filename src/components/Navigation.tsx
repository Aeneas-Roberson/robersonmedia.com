'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Instagram', href: '/instagram' },
  { name: 'Facebook', href: '/facebook' },
  { name: 'TikTok', href: '/tiktok' },
  { name: 'College Football', href: '/college-football' },
]

export default function Navigation() {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-cyan-500/20 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold neon-text-subtle">
              robersonmedia.com
            </span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
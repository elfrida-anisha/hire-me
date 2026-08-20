'use client'

import { useState } from 'react'

const navigation = [
  {
    name: 'Dashboard',
    icon: '▦',
  },
  {
    name: 'Job Postings',
    icon: '▣',
  },
  {
    name: 'Candidates',
    icon: '👥',
  },
]

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-gray-200 px-6 py-6">
        <h1 className="text-xl font-bold text-[#0F172A]">
          DK24 <span className="text-[#00C378]">CareerLink</span>
        </h1>

        <p className="mt-2 text-sm text-[#6B7280]">Recruiter Portal</p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const isActive = active === item.name

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(item.name)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                  ? 'bg-[#F3F4F6] text-[#0F172A]'
                  : 'text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#0F172A]'
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <button
          type="button"
          className="mb-2 w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-[#6B7280] transition hover:bg-[#F3F4F6]"
        >
          ? Help Center
        </button>

        <button
          type="button"
          className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          → Logout
        </button>
      </div>
    </aside>
  )
}

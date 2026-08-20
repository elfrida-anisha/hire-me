export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 lg:px-8">
      <div className="w-full max-w-xl">
        <input
          type="search"
          placeholder="Search candidates, jobs..."
          className="w-full rounded-lg border border-gray-200 bg-[#F3F4F6] px-4 py-3 text-sm text-[#0F172A] outline-none transition placeholder:text-[#6B7280] focus:border-[#00C378] focus:ring-2 focus:ring-[#00C378]/20"
        />
      </div>

      <div className="ml-6 flex items-center gap-5">
        <button
          type="button"
          className="text-lg text-[#6B7280] transition hover:text-[#0F172A]"
          aria-label="Notifications"
        >
          🔔
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] text-sm font-bold text-[#0F172A]"
          aria-label="Profile"
        >
          R
        </button>
      </div>
    </header>
  )
}

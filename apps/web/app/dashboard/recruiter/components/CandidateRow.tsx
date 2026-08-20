import type { Candidate } from '../data'

type CandidateRowProps = {
  candidate: Candidate
  onViewProfile: (candidate: Candidate) => void
  onContact: (candidate: Candidate) => void
}

export default function CandidateRow({ candidate, onViewProfile, onContact }: CandidateRowProps) {
  const initials = candidate.name
    .split(' ')
    .map((name) => name[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] font-semibold text-[#0F172A]">
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-[#0F172A]">{candidate.name}</h3>

          <p className="text-sm text-[#6B7280]">Applied for: {candidate.position}</p>

          <p className="mt-1 text-xs text-[#6B7280]">Applied {candidate.appliedAt}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-[#F3F4F6] px-2.5 py-1 text-xs font-medium text-[#6B7280]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={() => onViewProfile(candidate)}
          className="rounded-lg border border-[#0F172A] px-4 py-2 text-sm font-semibold text-[#0F172A] transition hover:bg-[#F3F4F6]"
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={() => onContact(candidate)}
          className="rounded-lg bg-[#00C378] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#00ad6b]"
        >
          Contact
        </button>
      </div>
    </div>
  )
}

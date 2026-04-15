"use client"
import Image from 'next/image'
import Link from 'next/link'

function FriendCart({ friend }) {
    return (
        <Link href={`/friends/${friend.name}`} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:border-[#86efac] transition-all duration-300 group hover:shadow-green-100/60">

            <div className="relative w-24 h-24 mb-4">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover border-4 border-gray-100 shadow-lg"
                    priority={friend.id <= 4}
                />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#16a34a] transition-colors">
                {friend.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
                {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {friend.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-[#86efac] text-gray-600 text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`mt-auto px-6 py-1.5 rounded-full text-xs font-bold capitalize tracking-wide shadow-sm 
                ${friend.status.toLowerCase() === 'overdue' ? 'bg-[#ef4444] text-white' :
                    friend.status.toLowerCase() === 'upcoming' ? 'bg-[#f59e0b] text-white' :
                        friend.status.toLowerCase() === 'active' ? 'bg-[#16a34a] text-white' :
                            'bg-gray-200 text-gray-700'
                }`}
            >
                {friend.status}
            </div>

        </Link>
    )
}

export default FriendCart
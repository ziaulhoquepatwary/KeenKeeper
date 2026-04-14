"use client"
import Image from 'next/image'

function FriendCart({ friend }) {
    return (
        <div className="bg-[#0f0f0f] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-800 hover:border-[#244D3F] transition-all duration-300 group shadow-xl hover:shadow-white/10">

            <div className="relative w-24 h-24 mb-4">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover border-4 border-gray-900 shadow-lg"
                    priority={friend.id <= 4}
                />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#4ade80] transition-colors">
                {friend.name}
            </h3>

            <p className="text-gray-500 text-sm mb-4">
                {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {friend.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-gray-800 text-gray-300 text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-gray-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`mt-auto px-6 py-1.5 rounded-full text-xs font-bold capitalize tracking-wide shadow-sm 
                ${friend.status.toLowerCase() === 'overdue' ? 'bg-[#ef4444] text-white' :
                    friend.status.toLowerCase() === 'almost due' ? 'bg-[#f59e0b] text-white' :
                        friend.status.toLowerCase() === 'on-track' ? 'bg-[#244D3F] text-white' :
                            'bg-gray-700 text-white'
                }`}
            >
                {friend.status}
            </div>

        </div>
    )
}

export default FriendCart
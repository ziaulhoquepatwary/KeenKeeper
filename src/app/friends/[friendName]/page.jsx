"use client"
import { useApp } from "@/context/AppContext"
import { Archive, ArrowLeft, BellRing, Edit3, History, MessageSquare, Phone, Trash2, Video } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react"

const actions = [
    {
        icon: <BellRing size={18} className="text-[#854f0b]" />,
        label: "Snooze 2 Weeks",
        bg: "bg-[#faeeda]",
        text: "text-[#5f5e5a]",
        border: "border-[#e8e4df]"
    },
    {
        icon: <Archive size={16} className="text-[#5f5e5a]" />,
        label: "Archive Friend",
        bg: "bg-[#f1efe8]",
        text: "text-[#5f5e5a]",
        border: "border-[#e8e4df]"
    },
    {
        icon: <Trash2 size={16} className="text-[#a32d2d]" />,
        label: "Delete Connection",
        bg: "bg-[#fff1f0]",
        text: "text-[#a32d2d]",
        border: "border-[#f7c1c1]"
    }
];

function FriendDetailsPage({ params }) {
    const { friends, timeline } = useApp();
    const { friendName } = React.use(params);
    const decodedName = decodeURIComponent(friendName);
    const router = useRouter();


    console.log(decodedName);

    const friend = friends.find(friend => friend.name === decodedName);

    if (!friend) {
        return <div className="p-10 text-center">Friend not found!</div>;
    }

    return (
        <main className="min-h-screen bg-[#faf9f7] text-gray-900 p-4 md:p-8 lg:p-10">
            <div className="max-w-7xl mx-auto">

                <div className="mb-8">
                    <button onClick={() => router.back()} className="flex items-center gap-2 text-[#a89e94] hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer">
                        <ArrowLeft size={16} /> Back to Friends
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="lg:col-span-4 space-y-4">

                        <div className="bg-white border border-[#e8e4df] rounded-3xl p-8 flex flex-col items-center text-center">
                            <div className="relative w-24 h-24 mb-5">
                                <Image
                                    src={friend.picture}
                                    alt={friend.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 96px"
                                    className="rounded-full object-cover"
                                    suppressHydrationWarning
                                />
                            </div>
                            <h1 className="text-2xl font-semibold mb-3 text-[#2c2a27]">{friend.name}</h1>
                            <div className="flex gap-2 mb-4 flex-wrap justify-center">
                                <span className="bg-[#eaf3de] text-[#3b6d11] text-[12px] font-medium px-3 py-1 rounded-full border border-[#d1e7b8]">
                                    {friend.tags[0]}
                                </span>

                                {friend.tags[1] && (
                                    <span className="bg-[#fff1f0] text-[#a32d2d] text-[12px] font-medium px-3 py-1 rounded-full border border-[#f7c1c1]">
                                        {friend.tags[1]}
                                    </span>
                                )}
                            </div>
                            <p className="text-[#a89e94] italic mb-2 leading-relaxed">{friend.bio}</p>
                            <p className="text-[12px] text-[#b4b2a9] tracking-wide">Email: {friend.email}</p>
                        </div>

                        <div className="space-y-2">
                            {actions.map((item, i) => (
                                <button
                                    key={i}
                                    className={`w-full flex items-center gap-3 py-4 px-5 rounded-2xl transition-all duration-200 font-medium ${item.text} border ${item.border} bg-white hover:bg-[#f5f2ee]`}
                                >
                                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#fff1f0] border border-[#f7c1c1] p-6 rounded-2xl text-center">
                                <p className="text-3xl font-semibold mb-1 text-[#a32d2d]">{friend.days_since_contact}</p>
                                <p className="text-[12px] text-[#888780] font-medium uppercase tracking-wider">Days Since Contact</p>
                            </div>
                            <div className="bg-[#f0ece6] border border-[#e8e4df] p-6 rounded-2xl text-center">
                                <p className="text-3xl font-semibold mb-1 text-[#633806]">{friend.goal}</p>
                                <p className="text-[12px] text-[#888780] font-medium uppercase tracking-wider">Goal (Days)</p>
                            </div>
                            <div className="bg-[#eaf3de] border border-[#c0dd97] p-6 rounded-2xl text-center">
                                <p className="text-xl font-semibold mb-1 text-[#3b6d11] pt-1">{friend.next_due_date}</p>
                                <p className="text-[12px] text-[#888780] font-medium uppercase tracking-wider">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#e8e4df] p-6 rounded-2xl flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-semibold mb-1 text-[#2c2a27]">Relationship Goal</h3>
                                <p className="text-[#a89e94]">Connect every <span className="text-[#3b6d11] font-medium">30 days</span></p>
                            </div>
                            <button className="w-10 h-10 bg-[#f5f2ee] hover:bg-[#eaf3de] rounded-xl flex items-center justify-center transition-all">
                                <Edit3 size={16} className="text-[#888780]" />
                            </button>
                        </div>

                        <div className="bg-white border border-[#e8e4df] p-6 rounded-2xl">
                            <h3 className="text-base font-semibold mb-5 text-[#2c2a27]">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex flex-col items-center gap-2.5 py-6 bg-[#f0ece6] border border-[#d6d3d1] rounded-2xl hover:bg-[#dfead3] transition-all group cursor-pointer">
                                    <Phone size={20} className="text-[#5f5e5a] group-hover:text-[#3b6d11]" />
                                    <span className="font-medium text-[#5f5e5a] group-hover:text-[#3b6d11]">Call</span>
                                </button>

                                <button className="flex flex-col items-center gap-2.5 py-6 bg-[#f0ece6] border border-[#d6d3d1] rounded-2xl hover:bg-[#dfead3] transition-all group cursor-pointer">
                                    <MessageSquare size={20} className="text-[#5f5e5a] group-hover:text-[#3b6d11]" />
                                    <span className="font-medium text-[#5f5e5a] group-hover:text-[#3b6d11]">Text</span>
                                </button>

                                <button className="flex flex-col items-center gap-2.5 py-6 bg-[#f0ece6] border border-[#d6d3d1] rounded-2xl hover:bg-[#dfead3] transition-all group cursor-pointer">
                                    <Video size={22} className="text-[#5f5e5a] group-hover:text-[#3b6d11]" />
                                    <span className="font-medium text-[#5f5e5a] group-hover:text-[#3b6d11]">Video</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white border border-[#e8e4df] p-6 rounded-2xl">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-base font-semibold text-[#2c2a27]">Recent Interactions</h3>
                                <button className="flex items-center gap-1.5 text-[12px] text-[#a89e94] font-medium tracking-wide hover:text-gray-900 transition-colors">
                                    <History size={16} /> View Full History
                                </button>
                            </div>

                            {timeline.length > 0 ? (
                                <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#f5f2ee] rounded-xl flex items-center justify-center text-[#888780] shrink-0">
                                            <MessageSquare size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-[#2c2a27]">Text Message</p>
                                            <p className="text-xs text-[#a89e94] mt-0.5">Asked for career advice and shared updates</p>
                                        </div>
                                    </div>
                                    <div className="text-[11px] text-[#b4b2a9] font-medium whitespace-nowrap ml-4">Jan 28, 2026</div>
                                </div>
                            ) : (
                                <p className="text-sm text-[#a89e94] text-center py-6">
                                    No interactions yet
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default FriendDetailsPage
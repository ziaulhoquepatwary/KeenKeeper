"use client";
import { useApp } from '@/context/AppContext';
import { useMemo, useState } from 'react';
import { FaHandshake, FaCommentDots, FaVideo, FaPhoneAlt } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';


function TimelinePage() {
    const { timeline } = useApp();
    const [filter, setFilter] = useState("")

    const filteredTimeline = useMemo(() => {
        if (!filter || filter === 'all') return timeline;

        return timeline.filter(item => {
            const type = item.type.toLowerCase();
            if (filter === "call") return type === "phone call";
            if (filter === "text") return type === "text message";
            if (filter === "video") return type === "video call";
            return true;
        })
    }, [filter, timeline])


    return (
        <section className="relative bg-[#f9fafb] overflow-hidden py-20 px-6 md:py-32 min-h-screen">
            {/* Background Decorative Blobs */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-green-100 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-100 blur-3xl" />

            <div className="relative max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Timeline</h2>

                    <div className="relative w-full max-w-xs">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-600 px-4 py-3 pr-10 rounded-xl shadow-sm outline-none hover:border-blue-400 transition-all cursor-pointer"
                        >
                            <option value="">All Activities</option>
                            <option value="call">Phone Call</option>
                            <option value="text">Text Message</option>
                            <option value="video">Video Call</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <HiChevronDown className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Timeline Items List */}
                <div className="space-y-4">
                    {filteredTimeline.length > 0 ? (
                        filteredTimeline.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-5 p-5 bg-white border border-blue-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-dashed"
                            >
                                <div className="shrink-0 text-2xl">
                                    {item.type.includes('Phone') ? <FaPhoneAlt className="text-gray-600" /> :
                                        item.type.includes('Text') ? <FaCommentDots className="text-gray-400" /> :
                                            item.type.includes('Video') ? <FaVideo className="text-gray-500" /> : null}
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold text-gray-700">{item.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{item.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center py-10">No activities found for this filter.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TimelinePage
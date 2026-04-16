import React from 'react'
import { FiUserPlus } from 'react-icons/fi'

function BannerSection() {
    return (
        <section className="relative bg-[#f0fdf4] overflow-hidden py-20 px-6 md:py-32">

            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-green-200/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-300/30 blur-3xl" />

            <div className="relative max-w-4xl mx-auto text-center space-y-6">

                {/* Eyebrow pill */}
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Your relationship shelf
                </span>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
                    Friends to keep <br />
                    close in your{" "}
                    <span className="relative inline-block text-[#16a34a]">
                        life
                        <svg
                            className="absolute -bottom-2 left-0 w-full"
                            viewBox="0 0 80 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 6 C20 2, 60 2, 78 6"
                                stroke="#16a34a"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.5"
                            />
                        </svg>
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                {/* CTA */}
                <div className="pt-4 flex items-center justify-center gap-4">
                    <button className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-green-200 cursor-pointer">
                        <FiUserPlus className="text-lg" />
                        Add a Friend
                    </button>
                </div>

            </div>
        </section>
    )
}

export default BannerSection
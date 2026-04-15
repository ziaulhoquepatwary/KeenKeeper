import React from 'react'

function BannerSection() {
    return (
        <section className="bg-[#f0fdf4] text-gray-900 py-10 px-6 md:py-20">
            <div className="max-w-7xl mx-auto text-center space-y-4">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Friends to keep close <br className="hidden md:block" />
                    in your <span className="text-[#16a34a]">life</span>
                </h1>

                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                <div className="pt-4">
                    <button className="bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 mx-auto cursor-pointer">
                        <span className="text-xl">+</span>
                        Add a Friend
                    </button>
                </div>

            </div>
        </section>
    )
}

export default BannerSection
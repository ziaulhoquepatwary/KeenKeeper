import React from 'react'

function BannerSection() {
    return (
        <section className="bg-[#101828] text-white py-10 px-6 md:py-20">
            <div className="max-w-7xl mx-auto text-center space-y-4">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Friends to keep close <br className="hidden md:block" />
                    in your <span className="text-[#4ade80]">life</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                <div className="pt-4">
                    <button className="bg-[#244D3F] hover:bg-[#2d5f4e] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 mx-auto cursor-pointer">
                        <span className="text-xl text-[#4ade80]">+</span>
                        Add a Friend
                    </button>
                </div>

            </div>
        </section>
    )
}

export default BannerSection
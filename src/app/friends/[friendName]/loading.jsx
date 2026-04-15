
function loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-4">

                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#16a34a] rounded-full animate-spin"></div>

                <p className="text-gray-400 text-sm tracking-wide animate-pulse">
                    Loading...
                </p>

            </div>
        </div>
    )
}

export default loading
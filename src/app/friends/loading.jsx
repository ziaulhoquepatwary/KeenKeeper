
function loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-gray-700 border-t-[#4ade80] rounded-full animate-spin"></div>

                {/* Text */}
                <p className="text-gray-300 text-sm tracking-wide animate-pulse">
                    Loading...
                </p>

            </div>
        </div>
    )
}

export default loading
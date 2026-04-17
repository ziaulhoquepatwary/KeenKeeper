import Link from 'next/link'

function NotFound() {
    return (
        <section className="bg-white flex flex-col items-center justify-center text-center px-4 py-25">

            <h1 className="text-black text-3xl font-bold mb-2">
                404 - Page Not Found
            </h1>

            <p className="text-gray-500 mb-6 max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link href="/" className="px-5 py-2 bg-black text-white rounded">
                Back to Home
            </Link>

        </section>
    )
}

export default NotFound
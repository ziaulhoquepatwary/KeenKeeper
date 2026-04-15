"use client"
import Link from "next/link"
import FriendCart from "./FriendCart";
import { useApp } from "@/context/AppContext";

function YourFriendsSection() {
    const { friends } = useApp();

    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <h2 className="text-3xl font-extrabold text-gray-900">Your Friends</h2>
                    <Link href="/friends" className="text-[#16a34a] font-semibold hover:underline flex items-center gap-1">
                        See more <span>&rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {friends?.slice(0, 12).map((friend) => (
                        <FriendCart key={friend.id} friend={friend} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YourFriendsSection
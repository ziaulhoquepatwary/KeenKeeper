import Link from "next/link"
import friendsData from '../../public/friends.json'
import FriendCart from "./FriendCart";
import { Slice } from "lucide-react";

function YourFriendsSection() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <h2 className="text-3xl font-extrabold text-white">Your Friends</h2>
                    <Link href="/friends" className="text-white font-semibold hover:underline flex items-center gap-1">
                        See more <span>&rarr;</span>
                    </Link>
                </div>

                {/* Friends Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {friendsData?.slice(0, 12).map((friend) => (
                        <FriendCart key={friend.id} friend={friend} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YourFriendsSection
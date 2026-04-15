"use client";

import FriendCart from "@/components/FriendCart"
import { Search } from "lucide-react"
import friendsData from '../../../public/friends.json'
import { useState } from "react";

function AllFriendsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFriends = friendsData.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        friend.email.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <main className="min-h-screen bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            All <span className="text-[#4ade80]">Friends</span>
                        </h1>
                        <p className="text-gray-400 mt-2">Manage and view your entire circle of {friendsData?.length} friends.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full bg-[#0f0f0f] border border-gray-800 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#244D3F] transition-all text-white"
                        />
                    </div>
                </div>
                {filteredFriends.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredFriends.map((friend) => (
                            <FriendCart key={friend.id} friend={friend} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#0f0f0f] rounded-3xl border border-dashed border-gray-800">
                        <p className="text-gray-500 text-lg">No friends found matching your search.</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default AllFriendsPage
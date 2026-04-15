"use client";
import { createContext, useContext, useEffect, useState } from "react";
import friendsData from "@/public/friends.json";

const AppContext = createContext();

const loadSavedTimeline = () => {
    try {
        const saved = localStorage.getItem("timeline");
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}

export function AppProvider({ children }) {
    const [friends] = useState(friendsData);

    const [timeline, setTimeline] = useState(loadSavedTimeline);

    const addEntry = (friendId, friendName, type) => {
        const newData = {
            id: Date.now(),
            friendId,
            friendName,
            type,
            date: new Date().toLocaleDateString(),
            title: `${type} with ${friendName}`
        }

        const update = [newData, ...timeline]
        setTimeline(update);
        localStorage.setItem("timeline", JSON.stringify(update));
    }

    return (
        <AppContext.Provider value={{ friends, timeline, addEntry }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);
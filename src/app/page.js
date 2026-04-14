import BannerSection from "@/components/BannerSection";
import StatsSection from "@/components/StatsSection";
import YourFriendsSection from "@/components/YourFriendsSection";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <BannerSection />
            <StatsSection />
            <YourFriendsSection />
        </div>
    );
}

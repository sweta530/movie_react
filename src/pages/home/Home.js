import { useEffect } from "react";
import HomeBanner from "./homeBanner/HomeBanner";
import Trending from "./trending/Trending";

export default function Home() {

    return (
        <>
            <HomeBanner />
            <Trending />
        </ >
    )
}
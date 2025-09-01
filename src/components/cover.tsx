"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Cover() {
    useEffect(() => {
        const music = document.getElementById("bg-music") as HTMLAudioElement | null;
        const coverFront = document.getElementById("cover-front");
        let isPlaying = false;

        if (music && coverFront) {
            coverFront.addEventListener("click", () => {
                if (isPlaying) {
                    music.pause();
                } else {
                    music.play();
                }
                isPlaying = !isPlaying;
            });
        }
    }, []);

    return (
        <>
            <div className="cover cover-left">
                <audio id="bg-music" loop>
                    <source src="/rainbow.mp3" type="audio/mpeg" />
                </audio>
            </div>

            <div className="cover cover-right">
            </div>
        </>
    );
}

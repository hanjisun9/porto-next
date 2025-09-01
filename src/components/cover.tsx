"use client";

import { useEffect } from "react";

export default function Cover() {
    useEffect(() => {
        const music = document.getElementById("bg-music") as HTMLAudioElement | null;
        const coverRight = document.getElementById("cover-right");
        let isPlaying = false;

        if (music && coverRight) {
            coverRight.addEventListener("click", () => {
                // klik cover kanan → buka + play/pause musik
                coverRight.classList.toggle("turn");

                if (isPlaying) {
                    music.pause();
                } else {
                    music.play();
                }
                isPlaying = !isPlaying;

                // setelah terbuka, turunkan z-index cover kanan
                setTimeout(() => {
                    if (coverRight.classList.contains("turn")) {
                        coverRight.style.zIndex = "-1";
                    } else {
                        coverRight.style.zIndex = "100"; // kalau ditutup lagi
                    }
                }, 1000); // sesuai durasi animasi
            });
        }
    }, []);

    return (
        <>
            {/* Cover kiri */}
            <div className="cover cover-left">
                <audio id="bg-music" loop>
                    <source src="/rainbow.mp3" type="audio/mpeg" />
                </audio>
                <span></span>
            </div>

            {/* Cover kanan */}
            <div className="cover cover-right" id="cover-right">
                <span></span>
            </div>
        </>
    );
}

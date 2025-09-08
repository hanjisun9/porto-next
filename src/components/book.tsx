"use client";

import Image from "next/image";
import { useEffect } from "react";
import BookPage from "./bookPage";
import ProfilePage from "@/app/profile/profile";
import AboutPage from "@/app/aboutme/aboutme";
import CerticatesFront from "@/app/certificates/certificatesFront";
import CertificatesBack from "@/app/certificates/certificatesBack";
import ReflectionPage from "@/app/reflection/reflection";
import SkillsPage from "@/app/skills/skills";
import ProjectPage from "@/app/project/projects";
import ContactPage from "@/app/contact/contact";

export default function Book() {
    useEffect(() => {
        const pages = document.querySelectorAll<HTMLDivElement>('.book-page.page-right');
        const totalPages = pages.length;

        // --- Logika Tombol ---
        const PageTurnBtns = document.querySelectorAll('.nextprev-btn');
        PageTurnBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const PageTurnId = btn.getAttribute('data-page');
                const PageTurn = document.getElementById(PageTurnId!) as HTMLDivElement | null;
                if (!PageTurn) return;

                if (PageTurn.classList.contains('turn')) {
                    PageTurn.classList.remove('turn');
                    setTimeout(() => { PageTurn.style.zIndex = String(20 - index); }, 500);
                } else {
                    PageTurn.classList.add('turn');
                    setTimeout(() => { PageTurn.style.zIndex = String(20 + index); }, 500);
                }
            });
        });

        const contactMeBtn = document.querySelector('.btn.contact');
        contactMeBtn?.addEventListener('click', () => {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => { page.style.zIndex = String(20 + index); }, 500);
                }, (index + 1) * 200 + 100);
            });
        });

        const backProfileBtn = document.querySelector('.back-profile');
        backProfileBtn?.addEventListener('click', () => {
            for (let i = totalPages - 1; i >= 0; i--) {
                setTimeout(() => {
                    pages[i].classList.remove('turn');
                    setTimeout(() => { pages[i].style.zIndex = String(totalPages - i); }, 500);
                }, (totalPages - 1 - i) * 200 + 100);
            }
        });

        // --- Logika Animasi Pembuka ---
        const book = document.querySelectorAll<HTMLDivElement>('.book-page.page-right');
        const totalPages2 = pages.length;

        const coverRight = document.querySelector('.cover.cover-right') as HTMLDivElement | null;
        const pageLeft = document.querySelector('.book-page.page-left') as HTMLDivElement | null;

        setTimeout(() => {
            coverRight?.classList.add('turn');
        }, 1000);


        setTimeout(() => {
            if (coverRight) coverRight.style.zIndex = '-1';
            if (pageLeft) pageLeft.style.zIndex = '20';

            // AUTO ANIMASI FLIP HALAMAN
            [...pages].reverse().forEach((page, index) => {
                setTimeout(() => {
                    page.classList.remove('turn');
                    page.style.zIndex = String(30 + index);
                }, index * 600);
            });
        }, 2200);
    }, []);

    return (
        <div className="book">
            <div className="book-page page-left">
                <div className="cover-gambar" id="cover-front">
                    <Image src="/cover2.png" alt="" width={500} height={285} />
                </div>
            </div>
            <BookPage id="turn-1" front={<ProfilePage />} back={<AboutPage />} side="right" className="turn" />
            <BookPage id="turn-2" front={<CerticatesFront />} back={<CertificatesBack />} side="right" className="turn" />
            <BookPage id="turn-3" front={<ReflectionPage />} back={<SkillsPage />} side="right" className="turn" />
            <BookPage id="turn-4" front={<ProjectPage />} back={<ContactPage />} side="right" className="turn" />
        </div>
    )
}
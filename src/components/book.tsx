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

        // next/prev button
        const PageTurnBtns = document.querySelectorAll('.nextprev-btn');
        PageTurnBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const PageTurnId = btn.getAttribute('data-page');
                const PageTurn = document.getElementById(PageTurnId!) as HTMLDivElement | null;

                if (!PageTurn) return;

                if (PageTurn.classList.contains('turn')) {
                    PageTurn.classList.remove('turn');
                    setTimeout(() => {
                        PageTurn.style.zIndex = String(20 - index);
                        PageTurn.classList.add('is-visible');
                    }, 500);
                } else {
                    PageTurn.classList.add('turn');
                    setTimeout(() => {
                        PageTurn.style.zIndex = String(20 + index);
                        PageTurn.classList.add('is-visible');
                    }, 500);
                }
            });
        });

        // contact me button
        const contactMeBtn = document.querySelector('.btn.contact');
        contactMeBtn?.addEventListener('click', () => {
            document.querySelectorAll('.is-visible').forEach(el => el.classList.remove('is-visible'));

            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => {
                        page.style.zIndex = String(20 + index);
                    }, 500);
                }, (index + 1) * 200 + 100);
            });

        });

        // back to profile button
        const backProfileBtn = document.querySelector('.back-profile');
        backProfileBtn?.addEventListener('click', () => {
            document.querySelectorAll('.is-visible').forEach(el => el.classList.remove('is-visible'));

            for (let i = totalPages - 1; i >= 0; i--) {
                setTimeout(() => {
                    pages[i].classList.remove('turn');
                    setTimeout(() => {
                        pages[i].style.zIndex = String(totalPages - i);
                    }, 500);
                }, (totalPages - 1 - i) * 200 + 100);
            }

        });

        // opening animation
        const coverRight = document.querySelector('.cover.cover-right') as HTMLDivElement | null;
        const pageLeft = document.querySelector('.book-page.page-left') as HTMLDivElement | null;

        pages.forEach((page, index) => {
            page.style.zIndex = String(totalPages - index);
        });

        setTimeout(() => {
            coverRight?.classList.add('turn');
        }, 2100);

        setTimeout(() => {
            if (coverRight) coverRight.style.zIndex = '-1';
        }, 3100);

        setTimeout(() => {
            if (pageLeft) pageLeft.style.zIndex = '20';
            const firstPage = document.getElementById('turn-1');
            if (firstPage) {
                firstPage.classList.add('is-visible');
            }
        }, 3500);

        pages.forEach((page, index) => {
            setTimeout(() => {
                if (page.id !== 'turn-1') {
                    page.classList.remove('turn');
                }
                setTimeout(() => {
                    page.style.zIndex = String(totalPages - index);
                }, 500);
            }, (index + 1) * 130 + 2100);
        });

        return () => {
            PageTurnBtns.forEach((btn) => btn.replaceWith(btn.cloneNode(true)));
            contactMeBtn?.replaceWith(contactMeBtn.cloneNode(true));
            backProfileBtn?.replaceWith(backProfileBtn.cloneNode(true));
        };
    }, []);

    return (
        <div className="book">
            <div className="book-page page-left">
                <div className="cover-gambar" id="cover-front">
                    <Image src="/cover2.png" alt="" width={500} height={285} />
                </div>
            </div>

            <BookPage id="turn-1" front={<ProfilePage />} back={<AboutPage />} side="right"/>
            <BookPage id="turn-2" front={<CerticatesFront />} back={<CertificatesBack />} side="right"/>
            <BookPage id="turn-3" front={<ReflectionPage />} back={<SkillsPage />} side="right"/>
            <BookPage id="turn-4" front={<ProjectPage />} back={<ContactPage />} side="right"/>
        </div>
    )
}

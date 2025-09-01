"use client";

export default function Sidebar() {
    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar") as HTMLElement | null;
        if (sidebar) {
            sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
        }
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("darkmode");
    };

    const goToPageWithFlip = (turnId: string, isFlipped: boolean = false) => {
        const pages = document.querySelectorAll<HTMLElement>(".book-page.page-right");
        const targetPage = document.getElementById(turnId) as HTMLElement | null;

        if (!targetPage) {
            console.error(`Page with ID ${turnId} not found.`);
            return;
        }

        const targetIndex = Array.from(pages).findIndex((p) => p.id === turnId);
        const totalPages = pages.length;

        document.querySelectorAll(".is-visible").forEach((el) =>
            el.classList.remove("is-visible")
        );

        pages.forEach((page, index) => {
            page.classList.remove("turn");
            page.style.zIndex = String(totalPages - index);
        });

        for (let i = 0; i <= targetIndex; i++) {
            setTimeout(() => {
                const page = pages[i];

                if (i < targetIndex || (i === targetIndex && isFlipped)) {
                    page.classList.add("turn");
                    page.style.zIndex = String(20 + i);
                } else {
                    page.classList.remove("turn");
                    page.style.zIndex = String(totalPages - i);
                }

                if (i === targetIndex) {
                    setTimeout(() => {
                        targetPage.classList.add("is-visible");
                    }, 500);
                }
            }, i * 200 + 500);
        }
    };

    return (
        <>
            <div className="hamburger" onClick={toggleSidebar}>☰</div>
            <div id="sidebar" className="sidebar">
                <div className="sidebar-links">
                    <a href="#" onClick={() => goToPageWithFlip("turn-1")}>Profile</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-1", true)}>About Me</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-2")}>Certificates</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-2", true)}>Certificates</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-3")}>Reflection</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-3", true)}>Skills</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-4")}>Project</a>
                    <a href="#" onClick={() => goToPageWithFlip("turn-4", true)}>Contact</a>
                </div>
                <div className="sidebar-footer">
                    <p>&copy; 2025 Azizah Nur Faridah</p>
                </div>
                <div className="darkmode">
                    <div className="darkmode-content" onClick={toggleDarkMode}>
                        <i className="bx bx-moon"></i> Dark Mode <i className="bx bx-sun"></i>
                    </div>
                </div>
            </div>

        </>
    );
}

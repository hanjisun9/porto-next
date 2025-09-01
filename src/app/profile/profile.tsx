import Image from "next/image";
import Button from "@/components/button";

export default function ProfilePage() {
    return (
        <div className="profile-page" id="page-front">
            <Image src="/zize.png" alt="" width={250} height={245} />
            <h1>Azizah Nur Faridah</h1>
            <h3>Student | Web & Flutter Learner</h3>

            <div className="social-media">
                <a href="https://www.instagram.com/zhnwve_"><i className="bx bxl-instagram"></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
                <a href="https://x.com/strawn4naa"><i className="bx bxl-twitter"></i></a>
                <a href="https://github.com/hanjisun9"><i className='bx bxl-github'></i></a>
            </div>

            <p>Halo! Aku Azizah Nur Faridah, siswi SMKN 8 Malang. Aku belum yakin apa skill-ku saat ini,
                tapi aku suka banget ngulik hal-hal baru yang menarik perhatian. Karena makin banyak
                orang merasa stres, termasuk aku sendiri, aku punya cita-cita jadi psikolog biar bisa
                bantu orang lain sekaligus memahami diriku lebih baik.</p>

            <div className="btn-box">
                <a href="#" className="btn contact">Contact Me</a>
            </div>

            <span className="number-page">1</span>
            <Button page="turn-1" direction="next" />
        </div>
    )
}
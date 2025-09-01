import Button from "@/components/button";

export default function ReflectionPage() {
    return (
        <div className="reflection-page">
            <h1 className="title">Inside My Mind</h1>
            <div className="reflection-box">
                <div className="reflection-content">
                    <i className="bx bx-like"></i>
                    <h3>Kesukaanku</h3>
                    <p>Baca Novel / AU sampai pagi (ga sadar ajasih), Nasi Goreng sedap broo dan
                        kadang cerita sampai ga tau waktu, KEJU ITU ENAK!</p>
                </div>

                <div className="reflection-content">
                    <i className="bx bx-dislike"></i>
                    <h3>Ketidaksukaan</h3>
                    <p>Ramai orang itu berisik banget lebih enak sendiri dan ruangan sempit bikin sesak nafas.
                        Rasa Coklat dan Matcha.</p>
                </div>

                <div className="reflection-content">
                    <i className="bx bx-book"></i>
                    <h3>Zona Nyaman Belajarku</h3>
                    <p>Aku belajar pake jadwal yang aku bikin sendiri niatnya sih tepat waktu, ujung-ujungnya molor juga.
                        Otakku langsung nyala kalau ada gambar / perumpamaan dan lagu-lagu yang nemenin.
                        Tapi kalau disuruh maju presentasi, nyali kadang ngumpet duluan, apalagi kalau ngerasa ketinggalan sama temen-temen.</p>
                </div>
            </div>

            <span className="number-page">5</span>
            <Button page="turn-3" direction="next" />
        </div>
    )
}
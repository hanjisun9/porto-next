import Image from "next/image";
import Button from "@/components/button";

export default function CertificatesBack() {
    return (
        <div className="certificates-back">
            <h1 className='title'>Certificates and Awards</h1>

            <div className="portofolio-container">
                <div className="portofolio-top">
                    <div className="portofolio-box">
                        <Image src="/sertifBing1.jpg" alt="" width={200} height={113} />
                        <div className="portofoli-layer">
                            <h4>Peserta (Nasional)</h4>
                            <p>Tetap di MTs, Olimpiade Bahasa Inggris tapi ga lolos sampai juara nasional,
                                cuma bisa jadi pesertanya saja.</p>
                        </div>
                    </div>
                    <div className="portofolio-box">
                        <Image src="/SertifBing2.jpg" alt="" width={200} height={113} />
                        <div className="portofoli-layer">
                            <h4>Medali Perunggu (Prov)</h4>
                            <p>Sebelum jadi peserta Olimpiade Bahasa Inggris tingkat nasional,
                                sempat dapat medali tingkat provinsi.</p>
                        </div>
                    </div>
                </div>

                <div className="portofolio-bottom">
                    <div className="portofolio-box">
                        <Image src="/sertifPenulis.jpg" alt="" width={300} height={100} />
                        <div className="portofoli-layer">
                            <h4>Penulis Terpilih (kelas)</h4>
                            <p>Ini juga masih di MTs, jadi penulis terpilih tingkat kelas
                                dan bisa launching 3 karya yaitu dua cerpen 1 puisi bertema rupa.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="number-page">4</span>
            <Button page="turn-2" direction="back" />
        </div>
    )
}
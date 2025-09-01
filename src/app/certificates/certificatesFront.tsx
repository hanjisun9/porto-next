import Image from "next/image";
import Button from "@/components/button";

export default function CertificatesFront() {
    return (
        <div className="certificates-front">
            <h1 className='title'>Certificates and Awards</h1>

            <div className="portofolio-container">
                <div className="portofolio-top">
                    <div className="portofolio-box">
                        <Image src="/sertifIpa1.jpg" alt="" width={200} height={113} />
                        <div className="portofoli-layer">
                            <h4>Medali Emas (Nasional)</h4>
                            <p>Pas MTs aku pernah ikut Olimpiade IPA, eh gak nyangka bisa lanjut sampai tingkat nasional, terus malah dapet medali emas.</p>
                        </div>
                    </div>
                    <div className="portofolio-box">
                        <Image src="/sertifIpa2.jpg" alt="" width={200} height={113} />
                        <div className="portofoli-layer">
                            <h4>Peringkat 7 (Prov)</h4>
                            <p>Nah sebelum dapat medali emas di tingkat nasional, aku sempat dapat peringkat 7 tingkat provinsi.</p>
                        </div>
                    </div>
                </div>

                <div className="portofolio-bottom">
                    <div className="portofolio-box">
                        <Image src="/ai.jpg" alt="" width={300} height={100} />
                        <div className="portofoli-layer">
                            <h4>AI (Kelas)</h4>
                            <p>Pas SMK lomba Artificial Intelligent (AI) sama Aurel. Awalnya ga pd kalau bisa nyelesain, kok
                                malah juara 1 tingkat kelas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="number-page">3</span>
            <Button page="turn-2" direction="next" />
        </div>
    )
}
import Button from "@/components/button";

export default function AboutPage() {
    return (
        <div className="about-page">
            <h1 className='title'>About Me</h1>

            <div className="aboutme-box">
                <div className="aboutme-content">
                    <span className='tentang'>Nama Lengkap</span>
                    <p>Azizah Nur Faridah</p>
                </div>

                <div className="aboutme-content">
                    <span className='tentang'>Tempat dan tanggal lahir</span>
                    <p>Malang, 18 November 2008</p>
                </div>

                <div className="aboutme-content">
                    <span className='tentang'>Keterampilan (non akademik)</span>
                    <p>Kreatif membuat kerajinan tangan, Manajemen waktu saat tugas numpuk, Suka bereksperimen
                        resep di dapur</p>
                </div>

                <div className="aboutme-content">
                    <span className='tentang'>Hobi</span>
                    <p>Menonton drama korea / film yang bergenre thriller, fantasi, action dan horor. Selain itu
                        aku juga Hobi
                        membaca novel dan mendengarkan lagu Kpop, HipHop atau Indiepop</p>
                </div>

                <div className="aboutme-content">
                    <span className='tentang'>Tokoh Fav</span>
                    <p>Na Jaemin from NCT </p>
                </div>

                <div className="aboutme-content">
                    <span className='tentang'>MBTI</span>
                    <p>INFJ / ENFJ-T</p>
                </div>
            </div>

            <span className='number-page'>2</span>
            <Button page="turn-1" direction="back" />
        </div>
    )
}
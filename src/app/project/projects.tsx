import Button from "@/components/button";

export default function ProjectPage() {
    return (
        <div className="project">
            <h1 className="title">My Project</h1>
            <div className="container-project">
                <div className="box">
                    <div className="content">
                        <h3>Portofolio</h3>
                        <p>Portofolio ini berisi perkenalan singkat tentang saya, mulai dari identitas,
                            pendidikan, hingga keterampilan yang saya kuasai.</p>
                        <div className="dor">
                            <a href="https://azizah-nur-faridah-portofolio.netlify.app/#" target="_blank"><i
                                className='bx bx-link'></i></a>
                            <a href="https://github.com/hanjisun9/porto-spa" target="_blank"><i
                                className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <h3>Dapoer Kita</h3>
                        <p>Dapoer Kita adalah website sederhana yang saya buat untuk belajar dasar-dasar
                            HTML,
                            mulai dari membuat teks, gambar, hingga tata letak halaman.</p>
                        <div className="dor">
                            <a href="https://dapoer-kita.vercel.app/" target="_blank"><i
                                className='bx bx-link'></i></a>
                            <a href="https://github.com/hanjisun9/Dapoer-Kita" target="_blank"><i
                                className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <h3>UI My Telkomsel</h3>
                        <p>UI MyTelkomsel adalah project UKK yang saya buat dengan Flutter,
                            berisi tampilan utama aplikasi seperti informasi pulsa, kuota, dan paket.</p>
                        <div className="dor">
                            <a href="hasil.png" target="_blank"><i className='bx bx-link'></i></a>
                            <a href="https://github.com/hanjisun9/my-Telkomsel" target="_blank"><i className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <span className="number-page">7</span>

            <Button page="turn-4" direction="next" />
        </div>
    )
}
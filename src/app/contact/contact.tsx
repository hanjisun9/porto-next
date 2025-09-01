import Button from "@/components/button";

export default function ContactPage() {
    return (
        <div className="contact-page">
            <h1 className="title">Contact Me!</h1>

            <div className="contact-box">
                <form action="#">
                    <input type="text" className='field' placeholder='Nama' required />
                    <input type="email" className='field' placeholder='Email' required />
                    <textarea name='' id='' cols={30} rows={10} className='field' placeholder='Pesan'
                        required></textarea>
                    <input type='submit' className='btn' value={'Kirim Pesan'}></input>
                </form>
            </div>

            <span className="number-page">8</span>
            <Button page="turn-4" direction="back" />

            <a href="#" className='back-profile'>
                <p>Profile</p>
                <i className="bx bxs-user"></i>
            </a>
        </div>
    )
}
import style from "./Footer.module.css";

function Footer() {
    return (
        <footer id="contact" >
            <div className={style.footer}>
                <div className={style.overlay} ></div>
                <div className={style.row}>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-instagram"></i></a>
                    <a href="/"><i className="fa fa-youtube"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                </div>

                <div className={style.row}>
                    <ul>
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                </div>

                <div className={style.row}>
                    <p>Mobilics Web Development Assignment | Developer By Mohit Rajput</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
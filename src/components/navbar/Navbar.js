import style from "./Navbar.module.css";

function Navbar({selectedLanguage, handlLanguageSwitch}) {
    return(
        <nav>
            <div className={style.title} >
                <p>Job-opporunity</p>
            </div>
            <div>
                <ul className={style.menuButtons} >
                    <li>
                        <a href="/" >
                            <button className={style.menuButton} >Home</button>
                        </a> 
                    </li>
                    <li>
                        <a href="#jobs" >
                            <button className={style.menuButton}>Jobs</button>
                        </a> 
                    </li>
                    <li>
                        <a href="#contact" >
                            <button className={style.menuButton}>Contact</button>
                        </a> 
                    </li>
                </ul>
            </div>
            <div className={style.languageContainer} >
                <select id="languageSelect" value={selectedLanguage} onChange={handlLanguageSwitch}>
                    <option value="en">English</option>
                    <option value="ja">Japan</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar;
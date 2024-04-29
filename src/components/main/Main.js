import style from "./Main.module.css";
import Jobcard from "../jobcard/Jobcard";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import {joblist} from "../../data";

function Main() {

    const [selectedLangauge, setSelectedLanguage] = useState('en');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(joblist);
  
    const handlLanguageSwitch = (e) => {
      setSelectedLanguage(e.target.value);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
        setFilteredData(joblist.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())))
    },[searchQuery]);

    return(
        <>
        <div className={style.theme} >
        <Navbar handlLanguageSwitch={handlLanguageSwitch} selectedLangauge={selectedLangauge} />
        <main>
            <div className={style.hero} >
                <div className={style.heroContent} >
                    <p>{selectedLangauge === 'ja' ? "新しい仕事を発見する" : "Discover new jobs"}</p>
                    <h1>{selectedLangauge === 'ja' ? "日本での仕事の機会を探る" : "Explore the job opporunity in japan"}</h1>
                    <div >
                        <a href="/" className={style.buttonLearnMore}  >
                            <span className={style.circle} aria-hidden="true">
                                <span className={style.icon} ></span>
                            </span>
                            <span className={style.buttonText} >{selectedLangauge === 'ja' ? "私たちについて" : "About Us"}</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        </div>
        {/* adv section */}
        <div className={style.logos} id="jobs" >
            <div className={style.logosSlide}>
                <img src="./logos/3m.svg" alt="Not Found" />
                <img src="./logos/barstool-store.svg" alt="Not Found" />
                <img src="./logos/budweiser.svg" alt="Not Found" />
                <img src="./logos/buzzfeed.svg" alt="Not Found" />
                <img src="./logos/forbes.svg" alt="Not Found" />
                <img src="./logos/macys.svg" alt="Not Found" />
                <img src="./logos/menshealth.svg" alt="Not Found" />
                <img src="./logos/mrbeast.svg" alt="Not Found" />
            </div>

            <div className={style.logosSlide}>
                <img src="./logos/3m.svg" alt="Not Found" />
                <img src="./logos/barstool-store.svg" alt="Not Found" />
                <img src="./logos/budweiser.svg" alt="Not Found" />
                <img src="./logos/buzzfeed.svg" alt="Not Found" />
                <img src="./logos/forbes.svg" alt="Not Found" />
                <img src="./logos/macys.svg" alt="Not Found" />
                <img src="./logos/menshealth.svg" alt="Not Found" />
                <img src="./logos/mrbeast.svg" alt="Not Found" />
            </div>
        </div>
        <div className={style.jobSection} >
            <video className={style.jobsectionVideo} muted loop autoPlay src="https://videos.pexels.com/video-files/7565622/7565622-hd_1080_1920_25fps.mp4" type="video/mp4" />
            <div className={style.jobheading} >
                <h1>Explore Jobs</h1>
                <div className={style.searchBox} >
                    <input type="search" placeholder="Type query" value={searchQuery} onChange={handleInputChange}  />
                </div>
            </div>
            <div className={style.jobList} >
                <Jobcard joblist={filteredData} />
            </div>
        </div>
        </>
    )
}

export default Main;
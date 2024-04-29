import style from "./Jobcard.module.css";

function Jobcard({ joblist }) {
    return (
        <>
            {joblist.length ?
                <>
                    {joblist.map((job, index) => (
                        <div className={style.jobCard} key={index} >
                            <div> 
                                <p className={style.jobId} >Job Id: {job.unique}</p>
                                <p className={style.jobTitle} >{job.title}</p>
                                <p className={style.jobCompany} >{job.companyName}</p>
                            </div>
                            <ul className={style.jobCategory} >
                                {job.category.map((catg, index) => (
                                    <li key={index} >{catg}</li>
                                ))}
                            </ul>
                            <div className={style.applyButton} >
                                <p>Apply</p>
                            </div>
                        </div>
                    ))}
                </>
                :
                <div className={style.noJobs} >No Jobs Found !</div>
            }
        </>
    )
}

export default Jobcard;
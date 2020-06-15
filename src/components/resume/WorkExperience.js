import React from 'react';

const WorkExperience = (workData) => {
    console.log(workData)
    return (
        <>
            {workData.workData.map((item, i) => {
                return (
                    <div key={i} className="work_item">
                        <div className="left">
                            <div className="font">
                                {(item.name).substr(0,1)}
                            </div>
                        </div>
                        <div className="center">
                            <h2>{item.job_title}</h2>
                            <h3>{item.name} / {item.industry}</h3>
                            <p>{item.location}</p>
                            <p>{item.job_content}</p>
                        </div>
                        <div className="right">
                            <p>{item.time}</p>
                            <p>{item.length_of_time}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default WorkExperience;
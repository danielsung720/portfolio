import React from 'react';
import HeadShot from '../../images/resume_head_shot.jpg';
import '../../scss/resume.scss';
import WorkExperience from './WorkExperience';

const data = {
    titleData: ['宋紹寧 Daniel', 'Just enjoy your choice.', '來自高雄的熱血青年', 'Taipei-Taiwan'],
    connectionData: ['+886-983653624', 'activearmy720@gmail.com'],
    autobiographyData: '樂於團隊分工，喜愛與夥伴一同達成目標的喜悅，在過去的工作中透過了團隊分工與溝通得到了許多寶貴的經驗，這些經驗到現在依然非常受用。高中時就對程式設計非常有興趣，這幾年間有注意到台灣有許多的企業在做IT整合，一直都有在自學，但成效不如預期，所以離職後去了職訓局受訓，才又踏上了這條路，一直記得有位前輩告訴我「工程師可以改變這個世界」，更加堅定了自己想要在這條道路上發展的信念。最近看到口罩地圖為社會帶來的貢獻，更激勵著自己想要在程式上的進步，雖然剛轉職當工程師還不到一年，也知悉在這個行業可學習的技術非常豐富，所以更需要為自己設下學習目標來達成，讓自己再不久的將來有能力開發出對這個社會有意義，使人們生活能夠更便利的程式。',
    frontEndSkill: ['HTML', 'CSS', 'JavaScript', 'J-Query', 'React'],
    backEndSkill: ['PHP', 'MySQL', 'Laravel'],
    work_experience: [
        {
            name: '邁爾思國際服務有限公司',
            job_content: '串接金流API',
            job_title: 'PHP工程師',
            industry: '軟體設計工程師',
            location: '台北市內湖區',
            time: '2020/4~2020/6',
            length_of_time: '3個月'
        },
        {
            name: '阿物股份有限公司',
            job_content: '共同維護及開發客戶寄件行銷系統，主要負責ROAS(廣告投資報酬率)Dashboard的部分，使用Laravel框架',
            job_title: 'PHP工程師',
            industry: '軟體設計工程師',
            location: '台北市中山區',
            time: '2020/2~2020/3',
            length_of_time: '2個月'
        },
        {
            name: '登泰國際物流有限公司',
            job_content: '針對進出口客戶開發：海運、空運進出口、轉口運送承攬及倉儲報關等業務',
            job_title: '行銷專員',
            industry: '國內業務人員',
            location: '高雄市苓雅區',
            time: '2019/2~2019/5',
            length_of_time: '4個月'
        },
        {
            name: '國泰人壽',
            job_content: '銷售商品、客戶服務、組織發展',
            job_title: '業務主任',
            industry: '保險業務',
            location: '高雄市前金區',
            time: '2018/9~2019/1',
            length_of_time: '5個月'
        },
        {
            name: '富邦人壽',
            job_content: '銷售商品、客戶服務、組織發展',
            job_title: '行銷專員',
            industry: '保險業務',
            location: '高雄市三民區',
            time: '2017/5~2018/8',
            length_of_time: '1年4個月'
        },
        {
            name: '尚亨運動用品',
            job_content: '業績管理、人員培訓管理、賣場陳列管理、倉庫管理、庫存管理、網路行銷管理、培訓講師',
            job_title: '店長',
            industry: '賣場管理人員',
            location: '高雄市鳳山區',
            time: '2014/12~2017/2',
            length_of_time: '2年3個月'
        },
        {
            name: '一亨運動用品',
            job_content: '賣場清潔、倉務、商品陳列、銷售商品、售後服務',
            job_title: '門市正職人員',
            industry: '專櫃人員',
            location: '高雄市新興區',
            time: '2013/9~2014/12',
            length_of_time: '1年4個月'
        },
        {
            name: '寒軒大飯店',
            job_content: '開宴前準備、上菜、顧客服務、宴後清掃',
            job_title: '假日班外場服務生',
            industry: '餐飲服務生',
            location: '高雄市苓雅區',
            time: '2006/7~2007/7',
            length_of_time: '1年'
        }
    ]
}

const Resume = () => {
    return (
        <div className="resume_wrapper">
            <div className="header">
                <div className="text">
                    <div className="title">
                        {data.titleData.map((item, i) => {
                            return i === 0 ? <h2 key={i}>{item}</h2> : <h3 key={i}>{item}</h3>
                        })}
                    </div>
                    <div className="connection">
                        {data.connectionData.map((item, i) => {
                            return item.indexOf('@') < 1 ? <a href={`tel:${item}`} key={i}>{item}</a> : <a href={`mailto:${item}`} key={i}>{item}</a>
                        })}
                    </div>
                </div>
                <div className="item">
                    <img src={HeadShot} alt="isMe"></img>
                </div>
            </div>
            <div className="container">
                <div className="autobiography">
                    {data.autobiographyData.split('。').map((item, i) => {
                        return item !== "" ? <p key={i}>{item}。</p> : null
                    })}
                </div>
                <div className="skills">
                    <div className="title">
                        <h2>Skills</h2>
                    </div>
                    <div className="front_end">
                        <h2>Front-End</h2>
                        <ul>
                            {data.frontEndSkill.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className="back_end">
                        <h2>Back-End</h2>
                        <ul>
                            {data.backEndSkill.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="work_experience">
                    <div className="title">
                        <h2>Work Experience</h2>
                    </div>
                    <WorkExperience workData={data.work_experience} />
                </div>
            </div>
        </div>
    )
}

export default Resume;
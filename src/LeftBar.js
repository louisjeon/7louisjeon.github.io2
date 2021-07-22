import React from 'react'
import LeftBarItem from './LeftBarItem'

function LeftBar() {
    const chapters = {
        study: {imageName: "qm", alt: "?", text: "How to study well"},
        htmlcss: {imageName: "htmlcss", alt: "HTML&CSS", text: "HTML&CSS"},
        javascript: {imageName: "javascript", alt: "JavaScript", text: "JavaScript"},
        react: {imageName: "react", alt: "react", text: "React"},
        nodejs: {imageName: "nodejs", alt: "Node JS", text: "Node JS"},
        ts: {imageName: "ts", alt: "TypeScript", text: "TypeScript"},
        ds: {imageName: "ds", alt: "Data Structures & Algorithms", text: "Data Structures & Algorithms"},
        qq: {imageName: "qq", alt: "Coding Questions", text: "Coding Questions"},
        cs: {imageName: "cs", alt: "Computer Science", text: "Computer Science"},
        Python: {imageName: "5848152fcef1014c0b5e4967", alt: "Python", text: "Python"},
        it: {imageName: "it", alt: "Interview", text: "Interview"}
    }
    return (
        <div class="left-bar">
            <div class="left-bar-title">
                <h2>
                    <img src={process.env.PUBLIC_URL + "mt.png"} alt="react"/>
                    Predo's Computer Science Class
                </h2>
            </div>
            {Object.values(chapters).map(val => <LeftBarItem imageName={val.imageName} alt={val.alt} text={val.text}/>)}
        </div>
    )
}

export default LeftBar

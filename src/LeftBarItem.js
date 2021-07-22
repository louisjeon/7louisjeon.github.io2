import React from 'react'

function LeftBarItem({imageName, alt, text}) {
    return (
        <div class="left-bar-item">
            <div class="left-bar-item-inner">
                <img src={process.env.PUBLIC_URL + `${imageName}.png`} alt={alt}/>
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default LeftBarItem

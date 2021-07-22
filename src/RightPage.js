import React from 'react'
import RightBottomInner from './RightBottomInner'

function RightPage() {
    return (
        <div class="right-page">
        <div class="right-upper">
            <div class="right-upper-inner">
                <div class="searchBar-out">
                    <input class="searchBar" placeholder="   Search..." type="text"/>
                    <button type="submit" class="searchButton">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="right-bottom">
            <RightBottomInner title="title" subject="JavaScript" date="2021.07.22" time="10PM" text="lorem ipsum ekfjselfkjeslfses"/>
        </div>
    </div>
    )
}

export default RightPage

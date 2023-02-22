import user from "../../img/sidebar/user.svg";
import news from "../../img/sidebar/News.svg";
import acquaintance from "../../img/sidebar/Acquaintance.svg";
import messages from "../../img/sidebar/message.svg";
import settings from "../../img/sidebar/settings.svg";
import developers from "../../img/sidebar/Developers.svg";
import technologies from "../../img/sidebar/Technologies.svg";
import advertising from "../../img/sidebar/advertising.svg";
import React from "react";
import './Sidebar.css'


export function Sidebar() {
    return (
        <div className={'sidebar'}>
            <div className={'sidebar__menu'}>
                <a href={'/content'} className={'sidebar__menu-home-page sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={user}/>
                    <p>Home page</p>
                </a>
                <a href={'/news'} className={'sidebar__menu-news sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={news}/>
                    <p>News</p>
                </a>
                <a href={'/acquaintance'} className={'sidebar__menu-acquaintance sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={acquaintance}/>
                    <p>Acquaintance</p>
                </a>
                <a href={'/messages'} className={'sidebar__menu-messages sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={messages}/>
                    <p>Messages</p>
                </a>
                <a href={'/settings'} className={'sidebar__menu-settings sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={settings}/>
                    <p>Settings</p>
                </a>
                <a href={'/developers'} className={'sidebar__menu-developers sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={developers}/>
                    <p>Developers</p>
                </a>
                <a href={'/technologies'} className={'sidebar__menu-technologies sidebar__menu-list'}>
                    <img className={'sidebar__menu-icon'} src={technologies}/>
                    <p>Technologies</p>
                </a>
            </div>
            <div className={'advertising'}>
                <h3>Advertising</h3>
                <div className={'advertising__image'}>
                    <img src={advertising} />
                </div>
                <p>Take the test and get a
                    10% discount
                    on tuition</p>
            </div>
        </div>
    )
}
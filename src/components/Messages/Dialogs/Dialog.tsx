import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Messages.module.css";
import logo1 from "../../../img/logo1.png";


type DialogType = {
    id: string
    userName: string
}

export function Dialog(props: DialogType) {
    return (
        <NavLink to={'/messages/' + props.id} className={s.dialogs__dialog}>
            <div className={s.dialog__icon}><img src={logo1}/></div>
            <span>{props.userName}</span>
        </NavLink>
    )
}
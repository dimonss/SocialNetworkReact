import React from "react";
import s from './ProfileInfo.module.css'
import font from './font.jpg'


const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img src={font} alt="USER IMG"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + discription
        </div>

    </div>
}


export default ProfileInfo;
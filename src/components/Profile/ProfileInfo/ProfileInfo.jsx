import React from "react";
import s from './ProfileInfo.module.css'
import font from './font.jpg'


const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img src={font} alt="USER IMG"/>
        </div>
        <div className={s.descriptionBlock}>
            <div className={s.ava}>
                ava
            </div>
            <div className={s.description}>
                discription
            </div>
        </div>

    </div>
}


export default ProfileInfo;
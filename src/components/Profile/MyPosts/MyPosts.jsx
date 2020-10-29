import React from "react";
import s from './Profile.module.css'
import font from './font.jpg'


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src={font} alt="USER IMG"/>
        </div>
        <div>
            ava + discription
        </div>
        <div>
            myposts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    posts
                </div>
                <div className={s.item}>
                    posts
                </div>
            </div>
        </div>
    </div>
}


export default Profile;
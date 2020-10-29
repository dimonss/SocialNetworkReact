import React from "react";
import s from './Profile.module.css'
import font from './font.jpg'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src={font} alt="USER IMG"/>
        </div>
        <div>
            ava + discription
        </div>
        <MyPosts />
    </div>
}


export default Profile;
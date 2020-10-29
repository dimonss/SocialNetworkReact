import React from "react";
import s from './MyPossts.module.css'
import avatara from '../avatara.jpg'


const MyPosts = () => {
    return <div>
            myposts
        <div>
            <textarea id="textareaForPosts" cols="100" rows="10"> Text post`s</textarea>
            <button>Add post</button>
        </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src={avatara} alt=""/>
                    <br/>
                    posts 1
                </div>
                <div className={s.item}>
                    posts 2
                </div>
                <div className={s.item}>
                    posts 3
                </div>
                <div className={s.item}>
                    posts 4
                </div>
            </div>
        </div>
}


export default MyPosts;
import React from "react";
import s from './MyPossts.module.css'
import Posts from "./post/Posts";


const MyPosts = () => {
    return <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div className={s.postsAreaAndButton}>
                <textarea name="Gena" id="" cols="70" rows="4" />
                <button>Add post</button>
                </div>
            </div>
        <div className={s.posts}>
            <Posts massage='Hi! How are you?' amountLikes = '5' />
            <Posts massage='it`s my first post!'  amountLikes = '6' />
            <Posts massage='it`s my!'  amountLikes = '7' />
            <Posts massage='first post!'  amountLikes = '8' />
        </div>
        </div>
}


export default MyPosts;
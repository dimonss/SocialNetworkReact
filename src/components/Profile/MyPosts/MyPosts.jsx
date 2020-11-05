import React from "react";
import s from './MyPossts.module.css'
import Posts from "./post/Posts";


const MyPosts = () => {
    return <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea name="Gena" id="" cols="30" rows="10" />
                </div>
                <div>
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
import React from "react";
import s from './MyPossts.module.css'
import Posts from "./post/Posts";


const MyPosts = () => {
    return <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10">Enter text</textarea>
                <button>Add post</button>
            </div>
        <div className={s.posts}>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
        </div>
}


export default MyPosts;
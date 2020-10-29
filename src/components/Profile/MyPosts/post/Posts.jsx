import React from "react";
import s from './Possts.module.css'
import avatara from './avatara.jpg'


const Posts = () => {
    return <div className={s.posts}>
                <div className={s.item}>
                    <img src={avatara} alt=""/>
                    <br/>
                    posts 1
                    <div>
                        <span>Like</span>
                    </div>
                </div>
            </div>
}


export default Posts;
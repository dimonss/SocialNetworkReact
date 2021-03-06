import React from "react"
import s from './Possts.module.css'
import avatara from './avatara.jpg'
import likeImg from './like.png'


const Posts = (props) => {
    return <div className={s.posts}>
                <div className={s.item}>
                    <img className={s.ava} src={avatara} alt=""/>
                    <div className={s.messages}>{props.message}</div>
                    <div className={s.like}>
                        {props.amountLikes}
                        <img id="like" src={likeImg} alt="like"/>
                    </div>
                </div>
            </div>
}


export default Posts
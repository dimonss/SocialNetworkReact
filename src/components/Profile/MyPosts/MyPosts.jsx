import React from "react";
import s from './MyPossts.module.css'
import Posts from "./post/Posts";


const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi! How are you?', amountLikes: 12},
        {id: 2, message: 'Dimoooon!', amountLikes: 10},
        {id: 3, message: 'It`s my first post!', amountLikes: 20},
        {id: 4, message: 'yo!', amountLikes: 30},
        {id: 5, message: 'Hello!!', amountLikes: 40}
    ]

    let postsElement = posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.amountLikes}/>);

    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div className={s.postsAreaAndButton}>
                <textarea name="Gena" id="" cols="70" rows="4"/>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElement }

    </div>
</div>
}


export default MyPosts;
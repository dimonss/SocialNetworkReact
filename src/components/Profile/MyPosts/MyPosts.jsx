import React from "react"
import s from './MyPossts.module.css'
import Posts from "./post/Posts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer"



const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let postsElement = props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.amountLikes}/>)
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div className={s.postsAreaAndButton}>
                <textarea onChange={onPostChange} ref={newPostElement} cols="70" rows="4" value={props.newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}


export default MyPosts
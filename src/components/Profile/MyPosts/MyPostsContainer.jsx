import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let state = store.getState()

                    return < MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer
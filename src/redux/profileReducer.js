const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', amountLikes: 12},
        {id: 2, message: 'Dimoooon!', amountLikes: 10},
        {id: 3, message: 'It`s my first post!', amountLikes: 20},
        {id: 4, message: 'yo!', amountLikes: 30},
        {id: 5, message: 'Hello!!', amountLikes: 40}
    ],
    newPostText: ""

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let valueId = state.posts.length + 1
            let newPost = {
                id: valueId,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText=''
            return state


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newSymbol
            return state


        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newSymbol: text})

export default profileReducer
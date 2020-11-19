import React from "react"
import style from "./users.module.css"

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: "https://mstrok.ru/sites/default/files/styles/user_xmd/public/user-images/46_3.jpg",
                    followed: true,
                    fullName: 'Hi! How are you?',
                    satatus: 'i`m a boss =]',
                    location: {city: 'Bishkek', country: 'Kyrgizstan'}
                },
                {
                    id: 2,
                    photoURL: "https://mstrok.ru/sites/default/files/styles/user_xmd/public/user-images/46_3.jpg",
                    followed: false,
                    fullName: 'Dimoooon!',
                    satatus: 'i`m a boss =]',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: "https://mstrok.ru/sites/default/files/styles/user_xmd/public/user-images/46_3.jpg",
                    followed: true,
                    fullName: 'It`s my first post!',
                    satatus: 'i`m a boss =]',
                    location: {city: 'Tumen', country: 'Russia'}
                },
                {
                    id: 5,
                    photoURL: "https://mstrok.ru/sites/default/files/styles/user_xmd/public/user-images/46_3.jpg",
                    followed: false,
                    fullName: 'yo!',
                    satatus: 'i`m a boss =]',
                    location: {city: 'Almaty', country: 'Kazahstan'}
                },
                {
                    id: 6,
                    photoURL: "https://mstrok.ru/sites/default/files/styles/user_xmd/public/user-images/46_3.jpg",
                    followed: true,
                    fullName: 'yo!',
                    satatus: 'i`m a boss =]',
                    location: {city: 'Astana', country: 'Kazahstan'}
                }
            ]
        )
    }
    return (<div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoURL} alt="avatara" className={style.imgAvavtara}/>
                </div>
                <div>
                    {
                        user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>

                <span>
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                </span>
            </span>

        </div>)}
    </div>)
}

export default Users
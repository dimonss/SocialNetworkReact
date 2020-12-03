import React from "react"
import style from "./users.module.css"
import * as axios from "axios"
import userPhoto from '../../assets/img/userPhoto.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            <div className={style.divSelectorPage}>
                <span className={style.selectorPage}>1</span>
                <span >2</span>
                <span >3</span>
                <span >4</span>
                <span >5</span>
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatara"
                         className={style.imgAvavtara}/>
                </div>
                <div>
                    {
                        user.followed
                            ? <button className={style.button} onClick={() => {
                                this.props.unfollow(user.id)
                            }}>unfollow</button>
                            : <button className={style.button} onClick={() => {
                                this.props.follow(user.id)
                            }}>follow</button>
                    }
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>

                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>

                </div>)}
        </div>
    }
}

export default Users
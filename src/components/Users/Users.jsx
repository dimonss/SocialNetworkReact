import React from "react"
import style from "./users.module.css"
import * as axios from "axios"
import userPhoto from '../../assets/img/userPhoto.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response => {
                 this.props.setUsers(response.data.items)
                 this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i=1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div>
            <div className={style.divSelectorPage}>
                { pages.map(move => {
                    return <span className={this.props.currentPage === move && style.selectedPage }
                                 onClick={() => { this.onPageChanged(move) }} >{move}</span>
                })}
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
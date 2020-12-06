import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    setCurrentpageActionCreator,
    setUsersTotalCountActionCreator
} from "../../redux/usersReducer"


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

}


let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentpageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}


export  default connect (mapStateToProps,mapDispatchToProps)(Users)
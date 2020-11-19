import {sentMessageActionCreator, updateNewMessaageBodyActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
   return{
       dialogsPage:state.dialogsPage
   }
}


let mapDispatchToProps = (dispatch) =>{
   return{
       updateNewMessaageBody: (body) => {
           dispatch(updateNewMessaageBodyActionCreator(body));
       },
       sendMessage: () => {
           dispatch(sentMessageActionCreator())
       }
   }
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer
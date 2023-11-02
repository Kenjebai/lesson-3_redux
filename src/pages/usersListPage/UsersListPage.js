import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserTable } from "../../redux/actions";
import User from "../../components/User";

function UsersListPage(){
    const tabl = useSelector(state => state.tableReducer.tables)
    const dispatch = useDispatch()

    const addTable = (event) => {
        event.preventDefault()
        dispatch(addUserTable())
    }

    return(
      <div>
        {tabl.map(user => <User username={user} />)}
        <button onClick={addTable}>btn</button>
      </div>
    )    
}


export default UsersListPage
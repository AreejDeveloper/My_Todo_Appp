import React from 'react'
import {Link} from "react-router-dom";
const MainPage = () => {
    return (
        <div className='container'>
            <h2>Splash Screen</h2>
            <Link variant="danger" exact to="/todo" >Add Todo</Link><br/><br/>
            <Link className='btn btn-info' variant="dark" exact to ="/updateTodo">Update Todo</Link><br/><br/>
        </div>

    )
}

export default MainPage;
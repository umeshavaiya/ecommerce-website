import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome to Your Shop</h2>
            <Link to="/Login">
                <button className="btn btn-danger">Login</button>
            </Link>
        </div>
    )
}

export default Home

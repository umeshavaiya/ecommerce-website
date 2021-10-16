import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/action'

function Header() {

  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser())
  }

  return (
    <nav className="header">
      <Link to='/'>
        <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" fontSize="large" />
      </div>
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            {currentUser ?
              (<span className="header__optionLineTwo" onClick={handleLogOut}>Logout</span>
              ) : (<Link to="/Login">
                <span className="header__optionLineTwo">Login</span>
              </Link>)}
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

      </div>
      {/* basket item with number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
        </div>
      </Link>
    </nav>
  )
}

export default Header
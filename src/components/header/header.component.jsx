import React from 'react'
import './header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util"
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,cartVisibilityHidden}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div  className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            cartVisibilityHidden?null:
                <CartDropDown/>
        }
    </div>
)
const mapStateToProps = ({user:{currentUser},cart:{cartVisibilityHidden}}) =>({
    currentUser,
    cartVisibilityHidden
})
export default connect(mapStateToProps)(Header);
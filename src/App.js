import './App.css';
import React from "react";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.util"
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import {Route,Redirect} from "react-router-dom";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id:snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            else{
                console.log("user has signed out")
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth){
            this.unsubscribeFromAuth();
        }
    }

    render() {
        return (
            <div>
                    <Header/>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route
                        path='/signin'
                        render = {() =>
                            this.props.currentUser ?
                                (<Redirect to='/'/>):
                                (<SignInAndSignUpPage/>)}/>
            </div>
        );
    }


}

const mapStateToProps = state =>({
    currentUser:state.user.currentUser
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

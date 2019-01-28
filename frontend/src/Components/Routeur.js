import React ,{Component} from "react";
import {withRouter,Route,Switch} from "react-router-dom";
import {connect} from "react-redux";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Home from "./Home/Home";
import Tarifs from "./Tarifs/Tarifs";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Contact from "./Contact/Contact";
import Help from "./Help/Help";
import Faq from "./Faq/Faq";
import Cgu from "./Cgu/Cgu";

class Routeur extends Component {
    render() {
        return (
            <div className="routeur">
                <Nav />
                <Switch>
                    <Route path="/Cgu" component={Cgu} />
                    <Route path="/Faq" component={Faq} />
                    <Route path="/Help" component={Help} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/SignUp" component={Signup} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Tarifs" component={Tarifs} />
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routeur));
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter,Route,Switch} from "react-router-dom";
import ConnexionAdmin from '../Administration/ConnexionAdmin';
import NavAdmin from "../Administration/NavAdmin";
import Bienvenue from "../Administration/Bienvenue";
import Gallerie from "../Administration/Gallerie"

export class AdminRouter extends Component {

    render() {
      return (
          <div>
            <Switch>
                {/*route pour gestion administration back-end*/}
                <Route exact path ="/admin/connexion" component={ConnexionAdmin}/>
  
                {
                    this.props.authentification.user.userData.user.isAdmin &&
                    <div>
                      <NavAdmin/>
                      <Route path ="/admin">
                        <div>
                          <Route exact path ="/admin/Bienvenue" component={Bienvenue}/>
                          <Route exact path ="/admin/Gallerie" component={Gallerie}/>
                        </div>
                      </Route>
                    </div>
                }
            </Switch>
          </div>
      );
  }
  }
  
  const mapStateToProps = (state) => ({
    ...state
  })
  
  const mapDispatchToProps = {
  
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminRouter));
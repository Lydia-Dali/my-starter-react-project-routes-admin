import React, { Component } from 'react';
import "./style.css"
import { Redirect } from "react-router-dom";
import authAction from "../store/actions/auth"
import { connect } from "react-redux";

class ConnexionAdmin extends Component {   

  render() {
    if (this.props.authentification.user.userData.user.isAdmin) {
        return <Redirect to={`/admin`} />
    }
    return (
      <div>
        <h1>I am interface admin</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
    authAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionAdmin);

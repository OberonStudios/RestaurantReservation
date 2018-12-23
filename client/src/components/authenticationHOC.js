import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //=====CAUSING INFINITE LOOP========
    // Our component just got updated
    // componentDidUpdate() {
    //   this.shouldNavigateAway();
    // }

    shouldNavigateAway() {
      console.log("Testing HOC");
      if (!this.props.auth) {
        this.props.history.push('/');
        console.log("Not logged in");
      }
      else{
          console.log("logged in");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
        auth: state.auth
    };
  }

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
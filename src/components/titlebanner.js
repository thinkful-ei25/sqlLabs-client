import React from 'react';
import { connect } from 'react-redux';

export function TitleBanner(props) {
  //leaving this optional incase we want the titlebanner to link to the dashboard, or use elsewhere
  // let linkurl = (props.loggedIn) ? "/dashboard" : "/";
  return (
    <div className="title-banner">
      {props.title}
      {/* <Link className="return-home" to={linkurl}>Home</Link> */}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(TitleBanner);

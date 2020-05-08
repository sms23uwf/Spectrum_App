import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { history } from '../routers/AppRouter';

export const LoginPage = ({ startLogin }) => (
  <div>
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Spectrum</h1>
        <p>Data Parsing and Analysis Tool.</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

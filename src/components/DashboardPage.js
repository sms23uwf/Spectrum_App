import React from 'react';
import InformedConsentModal from './InformedConsentModal';
import Checkbox from './Checkbox';
import { cancelLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../routers/AppRouter';
import selectUsers from '../selectors/users';
import { startAddUser } from '../actions/users';
//import * as firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import { setUUIDFilter } from '../actions/filters';
import Typography from "@material-ui/core/Typography";

// require('bootstrap/dist/css/bootstrap.css');

var userMustAgree = true;

const section = {
  height: "100%",
  paddingTop: 1
};

export class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    userMustAgree = false;
  }
  
  state = {
   showModal: userMustAgree,
   agreeChecked: false,
   userid: 1 //firebase.auth().currentUser.uid
  }

  closeModal = () => {
    userMustAgree = false
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleCancel = () => {
    this.closeModal()
    {cancelLogin()}
    history.push('/cancel');
  }

  toggleModal = () => {
    if (this.state.agreeChecked)
    {
      this.props.startAddUser();
      userMustAgree = false
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }

  onCheckChange = (e) => {
    this.setState({
      agreeChecked: !this.state.agreeChecked
    });
  };

  render() {
    return (
        <div className="content-container-dashboard">
          <span id="image">
            <span id="image-inner" />
          </span>
          <InformedConsentModal
          show={userMustAgree}
          closeCallback={this.toggleModal}
          handleLogout={this.handleCancel}
          customClass="custom_modal_class"
          >
            <React.Fragment>
            <br/>
            <h2>End User Agreement</h2>
            <Typography type="body2" style={{ fontSize: '1.25em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
              Here we could have a warning about unauthorized access and such.
            </Typography>

              <div className="list-item__consent">
                <Checkbox style={section} type="checkbox" label="I have read and understand the statements above." onCheckboxChange={this.onCheckChange}/>
              </div>

            </React.Fragment>
          </InformedConsentModal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    //users: selectUsers(state.users, firebase.auth().currentUser.uid),
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startAddUser: () => dispatch(startAddUser())
  //setUUIDFilter: (userId) => dispatch(setUUIDFilter(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
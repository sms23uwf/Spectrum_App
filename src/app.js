import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { login, logout } from './actions/auth';
import { startSetUsers } from './actions/users';
import { startSetEmitters } from './actions/emitters';
import { startSetEmitterModes } from './actions/emitterModes';
import { startSetGenerators } from './actions/generators';
import { firebase} from './firebase/firebase';
import { setUUIDFilter } from './actions/filters';
import LoadingPage from './components/LoadingPage';
import { render } from 'react-dom';
// get fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faChevronRight, faChevronDown, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';



library.add(faCheckSquare, faSquare, faChevronRight, faChevronDown, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile)
//library.add(faStroopwafel)

require('../public/images/favicon.ico');

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (firebase.auth().currentUser) {
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));
  }
  if (!hasRendered) {
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered = true;
    document.documentElement.requestFullscreen;
  }
};


ReactDOM.render(<LoadingPage />, document.getElementById('app'));
firebase.auth().onIdTokenChanged(() => {
  if (firebase.auth().currentUser) {
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));
  }
   if (history.location.pathname === 'cancel') {
     history.pushState('/');
   }
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
    store.dispatch(setUUIDFilter(firebase.auth().currentUser.uid));
    store.dispatch(login(user.uid));
    store.dispatch(startSetEmitters());
    store.dispatch(startSetEmitterModes());
    store.dispatch(startSetGenerators()).then(() => { 
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
   });
 } else {
   console.log('log out');

   store.dispatch(logout());
   renderApp();
   history.push('/');
 }

});
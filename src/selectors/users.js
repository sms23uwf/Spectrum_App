import { statement } from "@babel/template";
import uuid from 'uuid';
//import database from '../firebase/firebase';
//import * as firebase from 'firebase';

// Get visible users

export default (users, { userId }) => {
    
    return users.filter((user) => {
      const textMatch = true; //user.userid === firebase.auth().currentUser.uid;  
      return textMatch;
    }).sort((a, b) => {
      return a.content > b.content ? 1 : -1;
    });
  };
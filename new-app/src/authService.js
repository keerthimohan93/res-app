import firebase from "firebase";

const currentSession = () => {
  if (firebase.auth().currentUser) {
    return true;
  }
  return false;
};

export default currentSession;

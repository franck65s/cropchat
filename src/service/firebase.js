import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyD-N_2Fn_o9o6afCXNAf7JpAAqc0xCCEjY',
  authDomain: 'cropchat-16094.firebaseapp.com',
  databaseURL: 'https://cropchat-16094.firebaseio.com',
  projectId: 'cropchat-16094',
  storageBucket: '',
  messagingSenderId: '822526681755'
}
firebase.initializeApp(config)
export default {
  database: firebase.database()
}

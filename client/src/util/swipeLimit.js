// import firebase from "../../firebase/firebase";
// import { receiveUserInfo } from "../../actions/userInfo";
// import { connect } from "react-redux";

// const fetchCounter = (uid) => {
//   const ref = firebase.database().ref(`users/${uid}`);
//   // const database = firebase.database()
//   // .ref(`users/${user.id}`);
//   let data = null;

//   ref.once("value").then((snapshot) => {
//     console.log(snapshot.val());
//     data = snapshot.val();
//   });
//   if (!data) {
//     // create an object in DB that holds counter and time
//     data = {
//       id: uid,
//       counter: 0,
//       time: 0,
//     };
//     debugger;
//     ref.set(data);
//   }

//   // set data to state
//   // needs reducer and actions

//   receiveUserInfo(data);
// };

// const mapDispatchToProps = (dispatch) => ({
//   receiveUserInfo: (userInfo) => dispatch(receiveUserInfo(userInfo)),
// });

// export default connect(null, mapDispatchToProps)(fetchCounter);
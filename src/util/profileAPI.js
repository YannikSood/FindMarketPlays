import firebase from 'firebase';

export function emailReset(newEmail) {
    let user = firebase.auth().currentUser;

    return (
        user.updateEmail(newEmail)
    )
}

export function passwordReset() {
    let auth = firebase.auth();
    let user = firebase.auth().currentUser;
    let email = user.email;

    return auth.sendPasswordResetEmail(email);
}
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

// GET DATA AND SAVE IN REDUX STORE
const getAllUsers = () => {
    return (dispatch) => {
        database()
        .ref('/users')
        .once('value')
        .then(snapshot => {
            dispatch({ type: "GETALLUSERS", allUsers: snapshot.val() })
        });
    }
}

const getUser = () => {
    let currentUserUid = auth().currentUser.uid
    return (dispatch) => {
        database()
        .ref(`/users/${currentUserUid}`)
        .once('value')
        .then(snapshot => {
            dispatch({ type: "GETUSER", user: snapshot.val() })
        });
    }
}

export {getAllUsers,getUser};

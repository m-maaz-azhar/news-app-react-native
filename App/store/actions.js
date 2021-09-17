import database from '@react-native-firebase/database';

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

export {getAllUsers};

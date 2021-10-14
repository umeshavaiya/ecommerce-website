import * as types from './actionType';
import { auth, googleAuthProvider } from '../firebase'

const registerStart = () => ({
    type: types.REGISTER_START
});

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user

});

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
});
// For Google LogIn
const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START
});

const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user

});

const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
});

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName,
                });
                dispatch(registerSuccess(user));
            }).catch((error) => dispatch(registerFail(error.message)))
    }
}

export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignInStart())
        auth
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(googleSignInSuccess(user));
            }).catch((error) => dispatch(googleSignInFail(error.message)))
    }
}

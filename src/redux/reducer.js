import * as types from './actionType';

const initialState = {
    loading: false,
    currentUser: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.GOOGLE_SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case types.USER_LOGOUT:
                return {
                    currentUser: null
                }
        default:
            return state;
    }
};

export default userReducer;
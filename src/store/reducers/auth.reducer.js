import {
    TRY_AUTH_STARTED,
    TRY_AUTH_ENDED,
    LOGIN_ERROR,
    SIGNUP_ERROR,
    AUTH_SUCCESS
} from '../actions/index';

const initialState = {
    loading: false,
    loginErrorMessage: null,
    signupErrorMessage: null,
    successMessage: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRY_AUTH_STARTED:
            return {
                ...state,
                loading: true,
            };
        case TRY_AUTH_ENDED:
            return {
                ...state,
                loading: false,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                successMessage: null,
                loginErrorMessage: action.errorMessage,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                successMessage: null,
                signupErrorMessage: action.errorMessage,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                errorMessage: null,
                successMessage: action.successMessage,
            };
        default:
            return state;
    }
}

export default authReducer;
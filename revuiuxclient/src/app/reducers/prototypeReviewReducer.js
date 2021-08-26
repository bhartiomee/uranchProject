import actionTypes from "../../constants/action-types";

const prototypeReviewReducer = (state = {}, action) => {
switch (action.type) {
    case actionTypes.prototypeReview.PROTOTYPE_SUBMIT_REVIEW_SUCCESS: {
        return {
            ...state,
            error: null,
            prototypeResponse: action.questions
        }
    }
    case actionTypes.prototypeReview.PROTOTYPE_SUBMIT_REVIEW_FAILURE: {
        return {
            ...state,
            error: action.error,
        }
    }
    case actionTypes.prototypeReview.CLEAR_PROTOTYPE_RESPONSE_LIST: {
        return {
            ...state,
            prototypeResponse: []
        }
    }
    case actionTypes.prototypeReview.PROTOTYPE_RESPONSE_SUCCESS: {
        return {
            ...state,
            prototypeResponse: action.response
        }
    }
    case actionTypes.prototypeReview.PROTOTYPE_RESPONSE_FAILURE: {
        return {
            ...state,
            error: action.error
        }
    }
    default:
        return state;
    }
};

export default prototypeReviewReducer;


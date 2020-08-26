import {FETCH_BOOKS_BEGIN, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from '../actions/bookActions';
import{ADD_BOOKS_BEGIN, ADD_BOOKS_SUCCESS, ADD_BOOKS_FAILURE} from '../actions/bookActions'
import{UPDATE_BOOKS_BEGIN, UPDATE_BOOKS_SUCCESS, UPDATE_BOOKS_FAILURE} from '../actions/bookActions'
import{DELETE_BOOKS_BEGIN, DELETE_BOOKS_SUCCESS, DELETE_BOOKS_FAILURE} from '../actions/bookActions'

const initialState = {
    booksdata: [],
    loading: false,
    error: null
};

export default function bookReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS_BEGIN:
        return{
            ...state,
            loading:true,
            error:null
        }

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                booksdata : action.payload.booksdata
            }

            case FETCH_BOOKS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    booksdata: []
                }
            case ADD_BOOKS_BEGIN:
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            case ADD_BOOKS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null
                }
            case ADD_BOOKS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
                
                case UPDATE_BOOKS_BEGIN:
                    return {
                        ...state,
                        loading: true,
                        error: null
                    }
                case UPDATE_BOOKS_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        error: null
                    }
                case UPDATE_BOOKS_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload.error
                    }

                case DELETE_BOOKS_BEGIN:
                    return {
                        ...state,
                        loading: true,
                        error: null
                    }
                case DELETE_BOOKS_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        error: null
                    }
                case DELETE_BOOKS_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload.error
                    }

                default:
                    return state;
    }
}
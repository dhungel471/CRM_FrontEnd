import axios from "axios";

export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const ADD_BOOKS_BEGIN = 'ADD_BOOKS_BEGIN';
export const ADD_BOOKS_SUCCESS = 'ADD_BOOKS_SUCCESS';
export const ADD_BOOKS_FAILURE = 'ADD_BOOKS_FAILURE';

export const UPDATE_BOOKS_BEGIN = 'UPDATE_BOOKS_BEGIN';
export const UPDATE_BOOKS_SUCCESS = 'UPDATE_BOOKS_SUCCESS';
export const UPDATE_BOOKS_FAILURE = 'UPDATE_BOOKS_FAILURE';


export const DELETE_BOOKS_BEGIN = 'ADD_BOOKS_BEGIN';
export const DELETE_BOOKS_SUCCESS = 'ADD_BOOKS_SUCCESS';
export const DELETE_BOOKS_FAILURE = 'ADD_BOOKS_FAILURE';

export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = booksdata => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { booksdata }
});

export const fetchBooksError = error => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error }
});


export const addBooksBegin = () => ({
    type: ADD_BOOKS_BEGIN
});

export const addBooksSuccess = booksdata => ({
    type: ADD_BOOKS_SUCCESS,
    payload: { message: "success" }
});

export const addBooksError = error => ({
    type: ADD_BOOKS_FAILURE,
    payload: { error }
});

export const updateBooksBegin = () => ({
    type: UPDATE_BOOKS_BEGIN
});

export const updateBooksSuccess = booksdata => ({
    type: UPDATE_BOOKS_SUCCESS,
    payload: { message: "success" }
});

export const updateBooksError = error => ({
    type: UPDATE_BOOKS_FAILURE,
    payload: { error }
});


export const deleteBooksBegin = () => ({
    type: DELETE_BOOKS_BEGIN
});

export const deleteBooksSuccess = isbn => ({
    type: DELETE_BOOKS_SUCCESS,
    payload: { message: "success" }
});

export const deleteBooksError = error => ({
    type: DELETE_BOOKS_FAILURE,
    payload: { error }
});


export function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksBegin());
        axios
        .get("http://localhost:8080/api/books")
        .then(response => {
            dispatch(fetchBooksSuccess(response.data))
        })
        .catch(error => dispatch(fetchBooksError(error)));
    }
}

export function addBooks(booksdata) {
    return dispatch => {
        dispatch(addBooksBegin());
        axios
        .post("http://localhost:8080/api/books", booksdata)
        .then(response => {
            dispatch(addBooksSuccess(response.data));
        })
        .catch(error => dispatch(addBooksError(error)));
    }
}

export function updateBooks(isbn, booksdata) {
    return dispatch => {
        dispatch(updateBooksBegin());
        axios
        .post("http://localhost:8080/api/books"+ isbn, booksdata)
        .then(response => {
            dispatch(updateBooksSuccess(response.data));
        })
        .catch(error => dispatch(updateBooksError(error)));
    }
}

export function deleteBooks(isbn) {
    return dispatch => {
        dispatch(deleteBooksBegin());
        axios
        .delete("http://localhost:8080/api/books/"+ isbn)
        .then(response => {
            dispatch(deleteBooksSuccess(response.data))
        })
        .catch(error => dispatch(deleteBooksError(error)));
    }
}



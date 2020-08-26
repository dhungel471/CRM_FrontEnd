import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchBooks , deleteBooks} from '../actions/bookActions';


function mapStateToProps(state) {
  return {
    error: state.error,
    loading: state.loading,
    booksdata: state.booksdata
  }
}
 
const mapDispatchToProps = {
  fetchBooks,
  deleteBooks
}

function BookList(props) {
  const history = useHistory();

  useEffect(() => {
    props.fetchBooks();
  }, [])


  function handleEdit(isbn, book) {
   console.log(book);
 }

 function handleDelete(isbn){
   props.deleteBooks(isbn);
      
 }

  const noBorder = {"border-bottom":"none"}
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Edit/Delete</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Status</th>
              <th>Authors</th>
            </tr>
          </thead>
          <tbody>
          {props.booksdata.length > 0 && props.booksdata.map((book) => {
            return(
            <tr key={book.isbn}>
              <td>
                <button className="btn btn-info" onClick={() => handleEdit(book.isbn, book)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(book.isbn)}>Delete</button>
              </td>
              <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.status}</td>
         {book.authors.map((author)=>{
           return ( 
               <td key={author} >{author}</td>
         
           )
        })}
           
            </tr>
            );
          })}
          </tbody>
        
        </table>
    );
}

//export default BookList;
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addBooks } from '../actions/bookActions';


function mapStateToProps(state) {
    return {
      error: state.error,
      loading: state.loading,
      booksdata: state.booksdata
    }
  }

  const mapDispatchToProps = {
    addBooks
  }
  
  function AddBooks(props) {
    const isbnInput = useRef(null);
    const titleInput = useRef(null);
    const statusInput = useRef(null);
    let authorInput = useRef(null);
    const history = useHistory();
    
    function handleSubmit(event) {
     event.preventDefault();
     authorInput = authorInput.current.value.split("  ");
      let books = {
          isbn: isbnInput.current.value,
          title: titleInput.current.value,
          status: statusInput.current.value,
          authors: authorInput
      }
      props.addBooks(books);
      history.push("/api/books");
      
  }

  function handleCancel(event) {
    event.preventDefault();
     history.push("/api/books");
     
 }
    // useEffect(() => {
    //   props.history.push("/api/books");
    // }, []) 


      return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            {console.log('props>>>>>>', props)}
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input className="form-control" id="isbn" aria-describedby="isbn" placeholder="Enter ISBN" ref={isbnInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="title">Title:</label>
          <input className="form-control" id="title" aria-describedby="title" placeholder="Enter Title"  ref={titleInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="title">Status:</label>
          <input className="form-control" id="status" aria-describedby="status" placeholder="Enter Status" ref={statusInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="Authors">Author(s):</label>
          <input className="form-control" id="authors" aria-describedby="title" placeholder="Enter Author(s)" ref={authorInput}/>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={handleCancel}>Cancel</button>
      </form>
    </div>
      );
    }


  export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
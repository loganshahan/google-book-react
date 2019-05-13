import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";

class Books extends Component {
  state = {
    books: []
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
            <input type="text" class="form-control" placeholder="Book Title" />
            <input type="text" class="form-control" placeholder="Author" />
            <input type="textarea" class="form-control" placeholder="Book Synopsis" />
            <button className="btn btn-success">Submit</button>
            </form>
          </div>
          <div className="col-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
              <h3>No Results to Display</h3>
            </div>
            </div>
          </div>
    );
  }
}

export default Books;
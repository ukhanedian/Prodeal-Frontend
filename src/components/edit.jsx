import React, { Component } from 'react';
class Edit extends Component {
  state = {  }
  render() { 
    return (
      <div
        class="modal fade text-center"
        id="editModal"
        role="dialog"
        aria-labelledby="editModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 
                class="modal-title text-center"
                id="EditModalLavel"
              >
                Edit Name
              </h5>
              <button 
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <input 
                  type="text" 
                  class="form-control"
                  placeholder="Edit here"
                ></input>
              </div>
              <div class="modal-footer">
                <button 
                  type="button" 
                  class="btn btn-block btn-success"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Edit;
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios'

var appElement = document.getElementById('example');

Modal.setAppElement(appElement);

class JobAdd extends React.Component {

    state = {
        modalIsOpen: false,
        computers: [],
        loading: true,
        Bay: '',
        JobRef: '',
        CurrentStatus: '',
        Customer: '',
        Issue: ''
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    handleModalCloseRequest = () => {

        this.setState({ modalIsOpen: false });
    }

    postJob = () => {

        axios.post('http://localhost:5000/api/computer', {
            ref: this.state.JobRef,
            bay: this.state.Bay,
            issue: this.state.Issue,
            current_status: this.state.CurrentStatus,
            end_user: this.state.Customer
        })
            .then(res => {
                console.log(res)
                this.setState((prevState) => ({

                    computers: [...prevState.computers, res.data.computers]
                }))
            })
            .catch(console.log)
    }


    render() {
        return (


            <div>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.openModal}>Add New Repair</button>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.handleModalCloseRequest}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Job</h4>

                        </div>
                        <div className="modal-body">
                            <div className="col-md-12">
                                <form action="#" method="get" className="col-md-12" style={{ margin: 'auto' }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label>Job Ref:</label>
                                            <input type="text" className="form-control" value={this.state.JobRef} onChange={this.handleChange} id="JobRef" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label>Bay:</label>
                                            <input type="text" className="form-control" value={this.state.Bay} onChange={this.handleChange} id="Bay" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Current Status:</label>
                                            <input type="text" className="form-control" value={this.state.CurrentStatus} onChange={this.handleChange} id="CurrentStatus" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Customer:</label>
                                            <input type="text" className="form-control" value={this.state.Customer} onChange={this.handleChange} id="Customer" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Issue:</label>
                                            <input type="text" className="form-control" value={this.state.Issue} onChange={this.handleChange} id="Issue" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-secondary" onSubmit={this.postJob}>Post</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleModalCloseRequest}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}


export default JobAdd;

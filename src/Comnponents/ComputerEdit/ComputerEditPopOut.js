import React from 'react';
import Modal from 'react-modal';
import axios from 'axios'
import ProgressJob from './ProgressJob'
import UpdateJob from './UpdateStatus'
import CompleteJob from './CompleteJob'

class ComputerEditPopOut extends React.Component {

    state = {
        modalIsOpen: false,
        computers: [],
        loading: true,
        DialogSelect: 'Update'

    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    openModalUpdate = () => {
       this.setState({ modalIsOpen: true, DialogSelect: 'Update' });
       
    }

    openModalProgress = () => {
        this.setState({ modalIsOpen: true, DialogSelect: 'Progress' });
        
     }

     openModalComplete = () => {
        this.setState({ modalIsOpen: true, DialogSelect: 'Complete' });
        
     }

    handleModalCloseRequest = () => {

        this.setState({ modalIsOpen: false });
    }

    SelectDialog =() => {
        
        if (this.state.DialogSelect === 'Update'){
            return <UpdateJob handleModalCloseRequest={this.handleModalCloseRequest}/>

        } else if (this.state.DialogSelect === 'Progress'){

            return <ProgressJob stage={'1'} handleModalCloseRequest={this.handleModalCloseRequest}/>

        } else if (this.state.DialogSelect === 'Complete') {
            return <CompleteJob handleModalCloseRequest={this.handleModalCloseRequest}/>
        }

        
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

    componentWillMount() {
        Modal.setAppElement('body');
     }


    render() {
        return (


            <div>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.openModalProgress}>Progress</button>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.openModalUpdate}>Update Status</button>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.openModalComplete}>Mark As Complete</button>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.handleModalCloseRequest}
                    id='test1'
                >
                    
                        {this.SelectDialog()}
                    
                </Modal>
            </div>
        )
    }

}


export default ComputerEditPopOut;

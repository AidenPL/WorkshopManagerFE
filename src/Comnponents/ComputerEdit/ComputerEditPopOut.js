import React from 'react';
import Modal from 'react-modal';
import ProgressJob from './ProgressJob'
import UpdateJob from './UpdateStatus'
import CompleteJob from './CompleteJob'

class ComputerEditPopOut extends React.Component {

    state = {
        modalIsOpen: false,
        computers: [],
        loading: true,
        DialogSelect: 'Update',
        Date: '',
        Status: ''
    }

    handleChange = (e) => {
        console.log()
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    openModalUpdate = () => {
       this.setState({ modalIsOpen: true, DialogSelect: 'Update' });
       
    }

    openModalProgress = () => {
        if (this.props.stage === '3'){
            this.setState({ modalIsOpen: true, DialogSelect: 'Complete' });
        } else{
            this.setState({ modalIsOpen: true, DialogSelect: 'Progress' });
        }
     }

     openModalComplete = () => {
        this.setState({ modalIsOpen: true, DialogSelect: 'Complete' });
        
     }

    handleModalCloseRequest = () => {

        this.setState({ modalIsOpen: false });
    }

    progressStageMiddle = () => {
        if (this.props.stage === '1'){
            this.props.progressStage(this.state.Date, this.state.Status, 2, '?comment=true', `Progressed to In Progress - Status: ${this.state.Status}`)
        } else if (this.props.stage === '2'){
            this.props.progressStage(this.props.date, this.state.Status, 3, '?comment=true', `Progressed to Booking out - Status: ${this.state.Status}`)
        }
    }

    UpdateStatus = () => {
        this.props.progressStage(this.props.date, this.state.Status, this.props.stage, '?comment=true', `Updated Status: ${this.state.Status}`)
    }

    SelectDialog =() => {
        
        if (this.state.DialogSelect === 'Update'){
            return <UpdateJob handleModalCloseRequest={this.handleModalCloseRequest} Status={this.state.Status} handleChange={this.handleChange} UpdateStatus={this.UpdateStatus}/>

        } else if (this.state.DialogSelect === 'Complete' || this.state.Stage === '3') {
            return <CompleteJob handleChange={this.handleChange} handleModalCloseRequest={this.handleModalCloseRequest}/>
        } else if (this.state.DialogSelect === 'Progress'){
            return <ProgressJob stage={this.props.stage} Date={this.state.Date} Status={this.state.Status} handleChange={this.handleChange} progressStageMiddle={this.progressStageMiddle} handleModalCloseRequest={this.handleModalCloseRequest}/>
        } 

        
    }

    componentWillMount() {
        Modal.setAppElement('body');
        this.setState({Date: this.props.date})
     }


    render() {
        return (


            <div className="row">
            
                <div className="col-md-4"><button type="button" className="btn btn-block btn-outline-secondary" onClick={this.openModalProgress}>Progress</button></div>
                <div className="col-md-4"><button type="button" className="btn btn-block btn-outline-secondary" onClick={this.openModalUpdate}>Update Status</button></div>
                <div className="col-md-4"><button type="button" className="btn btn-block btn-outline-secondary" onClick={this.openModalComplete}>Mark As Complete</button></div>
                
                
                
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

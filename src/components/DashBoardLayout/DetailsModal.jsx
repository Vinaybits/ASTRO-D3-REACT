import React, { useState } from "react";
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Sideform from "../../SideComponents/sideform";

const DetailsModal = (props) => {
    
    return(
        <>
       <center>
            <Modal size="lg" dialogClassName={"primaryModal"} show={props.show} onHide={props.handleClose} centered>
                <Modal.Header 
                    closeButton 
                >
                </Modal.Header>
                <Modal.Body>
                <Sideform mode="TransitionView" view={props.view}/>
                </Modal.Body>
                </Modal>
        </center>  
        </>
    );
}
export default DetailsModal;
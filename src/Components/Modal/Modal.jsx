import React from 'react'
import { Button, ModalBody, ModalDialog, ModalHeader, ModalTitle } from 'react-bootstrap'
import "./Modal.css"
const Modal = ({onClose, toggle}) => {
  return (
    toggle && (
    <div className='modal-container'>
    <div
    className="modal show"
  >
    <ModalDialog>
      
        <ModalHeader>
           
                <ModalTitle>Validation</ModalTitle>
                          <Button onClick={() => onClose()}>X</Button>
            </ModalHeader>

       
        <ModalBody>
        <p>Employee was successfully created</p>
      </ModalBody>
        
      
    </ModalDialog>
  </div>
    </div>
    )
  )
}

export default Modal
import React from 'react'
import { Button, ModalBody, ModalDialog, ModalHeader, ModalTitle } from 'react-bootstrap'
import "./Modal.css"
/**
 * Modal - component - Modal Validation Form
 * React-bootstap UI
 * @param {function} onClose to close Modal
 * @param {boolean} toggle to toggle Modal
 * @returns {JSX.Element} - Modal component JSX element.
 */
const Modal = ({onClose, toggle}) => {
  return (
    toggle && (
    <div className='modal-container' onClick={()=> onClose()}>
    <div
    className="modal show"
  >
    <ModalDialog>
      
        <ModalHeader>
           
                <ModalTitle>Validation</ModalTitle>
                          <Button onClick={() => onClose()}>&#10799;</Button>
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
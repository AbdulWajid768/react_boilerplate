import React from 'react';
import { Modal } from "react-bootstrap";
import 'components/modals/_customModal.scss';

function CustomModal({show, title, description, handleCancel, confirmBtnTitle, handleConfirm}) {
  return (
    <Modal
      show={show}
      onHide={handleCancel}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>{description}</b>
      </Modal.Body>
      <Modal.Footer>
        <button className="customPrimaryBtn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="customPrimaryBtn" onClick={handleConfirm}>{confirmBtnTitle}</button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;

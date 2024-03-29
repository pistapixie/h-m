import React from "react";
import { Modal, Button } from "react-bootstrap";

const GeneralModal = ({
  show,
  onHide,
  title,
  body,
  cancelButtonText = "취소",
  confirmButtonText = "확인",
  onConfirm,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          {cancelButtonText}
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GeneralModal;

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({show, title, confirmText, confirmButtonText, onCancel, onConfirm}) {
  return (
    <>
      <Modal show={show} onHide={()=>onCancel()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{confirmText}</Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={()=>onCancel()}>
            No, Cancel
          </Button>
          <Button type="button" variant="danger" onClick={()=> onConfirm()}>
            {confirmButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
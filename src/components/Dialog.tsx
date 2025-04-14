import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface Props {
  title?: string;
  content?: string;
  closeable?: boolean;
  dismisable?: boolean;
  onclick?: () => void;
}

export default function Terms({
  title = "",
  content = "",
  closeable = false,
  dismisable = false,
}: Props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        centered
        show={show}
        size="sm"
        {...(dismisable && { onHide: handleClose })}
      >
        <Modal.Header {...(closeable && { closeButton: closeable })}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <div className="d-flex justify-content-center">
            <div className="spinner-border float" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useCustomSelector } from "../Service/allSelector/customSelector";

function MyModal(props) {
  const {cart} = useCustomSelector();
    return (
      <>
      <Modal
        {...props}
        size="md"
        // dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
               
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        {cart?.error !== null ? <div>{cart?.error?.[0]}</div> : <h2> Successfully Add Item </h2> }

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  export default MyModal;
  
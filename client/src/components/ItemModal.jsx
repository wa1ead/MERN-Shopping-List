import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../slices/itemSlice";

function ItemModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const setToggle = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={setToggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={setToggle}>
        <ModalHeader toggle={setToggle}>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name={name}
                id="item"
                placeholder="Add Shopping Item"
                onChange={onChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;

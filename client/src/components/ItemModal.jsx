import { useState } from "react";
import { useDispatch } from "react-redux";
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
import { v4 as uuid } from "uuid";
import { addItem } from "../features/item/itemSlice";

function ItemModal() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const setToggle = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault;
    const newItem = {
      id: uuid(),
      name: name,
    };

    //ADD ITEM ACTION
    dispatch(addItem(newItem));

    //CLOSE MODAL
    setToggle();
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
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Save
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;

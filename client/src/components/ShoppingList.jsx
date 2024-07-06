import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { deleteItem, fetchItems } from "../features/item/itemSlice";

function ShoppingList() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  console.log(items);

  // Ensure items is defined and is an array
  if (!items || !Array.isArray(items)) {
    return <div>No items found!</div>;
  }

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    dispatch(deleteItem(_id));
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

export default ShoppingList;

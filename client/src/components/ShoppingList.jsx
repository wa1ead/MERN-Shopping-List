import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";

function ShoppingList() {
  const items = useSelector((state) => state.items.list);

  // Ensure items is defined and is an array
  if (!items || !Array.isArray(items)) {
    return <div>No items found</div>;
  }

  return (
    <Container>
      <Button color="dark" style={{ marginBottom: "2rem" }}>
        Add Item
      </Button>

      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button className="remove-btn" color="danger" size="sm">
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

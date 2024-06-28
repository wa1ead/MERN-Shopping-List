import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./App.css";

const custom = {
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const products = [
  { id: 1, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 2, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 3, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 4, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 5, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 6, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 7, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 8, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
  { id: 9, name: "Apple", desc: "Cool stuff", qty: 20, price: 699 },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      items: products,
      name: "",
      desc: "",
      qty: 0,
      price: 0,
      modal: false,
      deleteItemId: "",
    };
  }

  handleItemDelete = (id) => {
    const { modal } = this.state;
    this.setState({ deleteItemId: id, modal: !modal });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAddItemToDashboard = () => {
    const { qty, name, desc, price, items } = this.state;
    const newArr = [...items];
    const arrOfIds = [];
    const newObj = {};

    if (name && desc && price && qty) {
      newArr.forEach((item) => arrOfIds.push(item.id));

      const id = arrOfIds.length === 0 ? 1 : Math.max(...arrOfIds) + 1;

      newObj["id"] = id;
      newObj["name"] = name;
      newObj["qty"] = qty;
      newObj["desc"] = desc;
      newObj["price"] = price;
      newArr.push(newObj);

      this.setState({ items: newArr, name: "", desc: "", qty: 0, price: 0 });
    } else {
      alert("Please enter values in the form");
    }
  };

  handleClearItems = () => {
    const { items } = this.state;
    let newArr = [...items];
    if (newArr.length !== 0) {
      newArr = [];
      this.setState({ items: newArr });
    }
  };

  handleYesDelete = () => {
    const { items, deleteItemId, modal } = this.state;
    const newArr = [...items];
    this.setState({
      items: newArr.filter((item) => item.id !== deleteItemId),
      modal: !modal,
    });
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { items, qty, name, desc, price, modal } = this.state;
    console.log(items);
    return (
      <div className="App">
        <div className="left-side">
          <Form>
            <FormGroup>
              <Label for="name">Product Name</Label>
              <Input
                style={custom}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => this.handleInputChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Product Description</Label>
              <Input
                style={custom}
                type="textarea"
                name="desc"
                id="desc"
                value={desc}
                onChange={(e) => this.handleInputChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input
                style={{ width: "110px" }}
                type="number"
                name="qty"
                id="qty"
                value={qty > 0 ? qty : 0}
                onChange={(e) => this.handleInputChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                style={{ width: "110px" }}
                type="number"
                name="price"
                id="price"
                value={price > 0 ? price : 0}
                onChange={(e) => this.handleInputChange(e)}
              />
            </FormGroup>
            <Button
              style={{ float: "right" }}
              onClick={this.handleAddItemToDashboard}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="right-side">
          <header>
            <p>YOUR ITEMS</p>
            <p id="clear-items" onClick={this.handleClearItems}>
              CLEAR ITEMS
            </p>
          </header>
          <main>
            {items.map((item) => {
              return (
                <div style={custom} key={item.id} className="single-item">
                  <div
                    onClick={() => this.handleItemDelete(item.id)}
                    className="delete-item"
                  >
                    X
                  </div>
                  <div className="item-name">
                    <strong>Name:</strong> {item.name}
                  </div>
                  <div className="item-desc">
                    <strong>Desc:</strong> {item.desc}
                  </div>
                  <div className="item-qty">
                    <strong>Qty:</strong> {item.qty}
                  </div>
                  <div className="item-price">
                    <strong>Price:</strong> ${item.price}
                  </div>
                </div>
              );
            })}
          </main>
          <Modal isOpen={modal} fade={false} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              Confirm Deleting the Item
            </ModalHeader>
            <ModalBody>Are you sure you want to delete the item?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleYesDelete}>
                Yes, delete!
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                No, Cancel!
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

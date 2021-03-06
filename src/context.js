import React, { Component } from "react";
import axios from "axios";

const PizzaContext = React.createContext();

class PizzaProvider extends Component {
  state = {
    name: "",
    phone: "",
    address: "",
    order: [],
    isLoading: true,
    pizzas: [],
    detailPizza: {},
    cart: [],
    modalOpen: false,
    orderPizza: {},
    cartSubTotal: 0,
    delivery: 0,
    cartTotal: 0,
    errorMessage: "",
  };

  componentDidMount() {
    axios
      .get(`http://localhost:${5000 || process.env.PORT}/pizzas`)
      .then((res) => {
        this.setState({ pizzas: res.data, isLoading: false });
      });
  }

  getPizza = (id) => {
    const pizza = this.state.pizzas.find((pizza) => pizza._id === id);
    return pizza;
  };

  handleDetail = (id) => {
    const pizza = this.getPizza(id);
    localStorage.setItem("pizza", JSON.stringify(pizza));
    this.setState(() => {
      return {
        detailPizza: pizza,
      };
    });
  };

  // local storage cart - uradi posle

  addToCart = (id) => {
    let tempPizzas = [...this.state.pizzas];
    const index = tempPizzas.indexOf(this.getPizza(id));
    const pizza = tempPizzas[index];
    pizza.inCart = true;
    pizza.count = 1;
    const price = pizza.price;
    pizza.total = price;
    this.setState(
      () => {
        return {
          pizzas: tempPizzas,
          cart: [...this.state.cart, pizza],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const pizza = this.getPizza(id);
    this.setState(() => {
      return {
        orderPizza: pizza,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedPizza = tempCart.find((item) => item._id === id);
    const index = tempCart.indexOf(selectedPizza);
    const pizza = tempCart[index];
    pizza.count = pizza.count + 1;
    pizza.total = pizza.count * pizza.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedPizza = tempCart.find((item) => item._id === id);
    const index = tempCart.indexOf(selectedPizza);
    const pizza = tempCart[index];
    pizza.count = pizza.count - 1;
    if (pizza.count === 0) {
      this.removePizza(id);
    } else {
      pizza.total = pizza.count * pizza.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removePizza = (id) => {
    let tempPizzas = [...this.state.pizzas];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item._id !== id);
    const index = tempPizzas.indexOf(this.getPizza(id));
    let removedPizza = tempPizzas[index];
    removedPizza.inCart = false;
    removedPizza.count = 0;
    removedPizza.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          pizzas: [...tempPizzas],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        axios
          .get(`http://localhost:${5000 || process.env.PORT}/pizzas`)
          .then((res) => {
            this.setState({
              pizzas: res.data,
              isLoading: false,
              errorMessage: "",
              name: "",
              address: "",
              phone: "",
            });
          });
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempDelivery = subTotal * 0.2;
    const delivery = parseFloat(tempDelivery.toFixed(2));
    const total = subTotal + delivery;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        delivery: delivery,
        cartTotal: total,
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const address = this.state.address;
    const phone = parseInt(this.state.phone);
    const total = this.state.cartTotal;
    const tempCart = [
      ...this.state.cart.map((item) => {
        return item.name;
      }),
    ];

    axios
      .post(`http://localhost:${5000 || process.env.PORT}/orders`, {
        name: name,
        address: address,
        phone: phone,
        price: total,
        orders: tempCart,
      })
      .then((response) => {
        this.setState({
          name: "",
          address: "",
          phone: "",
          errorMessage: "",
        });
        this.openModal();
        this.clearCart();
      })
      .catch((error) => {
        return this.setState({
          errorMessage: "Please provide the valid name, address and phone...",
        });
      });
  };

  render() {
    return (
      <PizzaContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removePizza: this.removePizza,
          clearCart: this.clearCart,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </PizzaContext.Provider>
    );
  }
}

const PizzaConsumer = PizzaContext.Consumer;

export { PizzaProvider, PizzaConsumer };

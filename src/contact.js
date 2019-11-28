import React, { Component } from "react";
import Input from "./input";

class Contact extends Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeHolder: "Your Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeHolder: "Your E-mail"
        },
        value: ""
      },
      dropdown: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheaspest" }
          ]
        },
        value: ""
      }
    }
  };

  inputChangedHandler = (event, Identifier) => {
    const updatedForm = { ...this.state.form };
    const updatedFormElement = { ...updatedForm[Identifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[Identifier] = updatedFormElement;
  };

  render() {
    const formElements = [];
    for (let key in this.state.form) {
      formElements.push({
        id: key,
        config: this.state.form[key]
      });
    }

    let form = (
      <form>
        {formElements.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            changed={event => this.inputChangedHandler(event, el.id)}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    );

    return (
      <div>
        <h3>this is my form</h3>
        {form}
      </div>
    );
  }
}

export default Contact;

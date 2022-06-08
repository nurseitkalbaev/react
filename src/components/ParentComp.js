import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nurseit",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Nurseit",
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        I am the parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

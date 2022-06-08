import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    return <div>I am the PureComp{this.props.name}</div>;
  }
}

export default PureComp;

import React, { Component } from "react";

export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    console.log(error.stack);
    console.log(errorInfo);
    this.setState({ error });
  }

  render() {
      console.log(`Hola estos es: ${this.state.error}`);
    if (this.state.error) {
      return (
        <div className="snap">
          <div className="snap-message">
            <p>We're sorry - something's gone wrong.</p>
            <p>
              Our team has been notified, but click{" "}
              <button onClick={() => this.setState({ error: null })}>
                here
              </button>{" "}
              to fill out a report.
            </p>
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
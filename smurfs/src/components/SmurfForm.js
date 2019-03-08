import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.activeSmurf &&
  //     prevProps.activeSmurf !== this.props.activeSmurf
  //   ) {
  //     this.setState({
  //       ...this.props.activeSmurf
  //     });
  //   }
  // }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: value
    }));
  }

  render() {
    console.log(this.props.adding);
    let Style = {};
    this.props.adding ? Style = { display: 'block' } : Style = { display: 'none' };
    console.log(Style);
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="form-button">Add to the village</button>
        </form>
        <h3 style={Style}>Sending data to server</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding: state.addingSmurf,
});

export default connect(
  mapStateToProps,
  {
    addSmurf
  }
)(SmurfForm);

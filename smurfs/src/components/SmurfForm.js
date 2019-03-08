import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      updating: false
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.activeSmurf &&
      prevProps.activeSmurf !== this.props.activeSmurf
    ) {
      this.setState({
          ...this.props.activeSmurf,
          updating: true
      });
    }
  }

  updateSmurf = e => {
    console.log('i get here')
  }

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
    let Style = {};
    let myButton = 'Add to the village';
    let myButtonFunction = this.addSmurf;
    this.props.adding ? Style = { display: 'block' } : Style = { display: 'none' };
    this.state.updating ? myButton = 'Update this Smurf' : myButton = 'Add to the village';
    this.state.updating ? myButtonFunction = this.updateSmurf : myButtonFunction = this.addSmurf;
    return (
      <div className="SmurfForm">
        <form onSubmit={myButtonFunction}>
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
          <button className="form-button">{myButton}</button>
        </form>
        <h3 style={Style}>Sending data to server</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding: state.addingSmurf,
  activeSmurf: state.activeSmurf
});

export default connect(
  mapStateToProps,
  {
    addSmurf
  }
)(SmurfForm);

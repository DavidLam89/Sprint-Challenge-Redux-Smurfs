import React from "react";
import { connect } from "react-redux";
import { getSmurfs, setUpdateForm } from '../actions';
import Smurf from './Smurf';

class Smurfs extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetching) {
            return (<h3>Loading data from server...</h3>)
        }
        return (
                this.props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurf={smurf} setUpdateForm={this.props.setUpdateForm}/>;
                })
        );
    }
}

const mapStateToProps = state => ({
    fetching: state.fetchingSmurfs,
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    {
        getSmurfs,
        setUpdateForm
    }
)(Smurfs);
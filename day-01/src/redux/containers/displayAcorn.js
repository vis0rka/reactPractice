import { connect } from 'react-redux';
import Display from '../../display';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const DisplayAcorn = connect(
  mapStateToProps
)(Display);

export default DisplayAcorn;
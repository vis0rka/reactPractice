import { connect } from 'react-redux';
import { eating } from '../actionTypes';
import Button from '../../button';

const mapStateToProps = () => {
  return {
    label: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eating());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
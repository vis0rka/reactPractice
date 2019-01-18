import { connect } from 'react-redux';
import { buying } from '../actionTypes';
import Button from '../../button';

const mapStateToProps = () => {
  return {
    label: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buying());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
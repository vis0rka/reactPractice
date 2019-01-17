
const initialState = {
  counter: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EATING_ACORN':
      if (state.counter > 0) {
        return {
          counter: state.counter - 1
        };
      } else {
        break;
      };
    case 'BUYING_ACORN':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};


export default rootReducer;
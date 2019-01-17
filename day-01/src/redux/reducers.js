
const initialState = {
  counter: 0
}

const acorns = (state = initialState, action) => {
  switch (action.type) {
    case 'EATING_ACORN':
      if (state.counter > 0) {
        return {
          counter: state.counter - 1
        };
      } else {
        return state;
      };
    case 'BUYING_ACORN':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};


export default acorns;
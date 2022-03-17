type Action = {
    type: string;
    value?: number;
  };
  
  type State = {
    count: number;
  };
  
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  
  export default reducer;
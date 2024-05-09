import { useState } from 'react';

const useCustomReducer = (reducerFn, InitialState) => {
  const [state, setState] = useState(InitialState);

  const dispatch = userAction => {
    setState(reducerFn(state, userAction));
  };

  return [state, dispatch];
};

export default useCustomReducer;

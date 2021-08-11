import { useState } from 'react';

const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, name: keyof T) => {
    setState({
      ...state,
      [name]: value
    });
  };

  return {
    ...state,
    onChange
  };
};

export default useForm;

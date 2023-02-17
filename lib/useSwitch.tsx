import { useState } from 'react';

const useSwitch = (defaultName = '') => {
  const [name, setName] = useState(defaultName);

  const toggle = (newName: string) => {
    if (name === newName) {
      setName('');
    } else {
      setName(newName);
    }
  };

  return [name, toggle];
};

export default useSwitch;

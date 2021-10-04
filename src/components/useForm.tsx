import { useState, ChangeEvent } from 'react';

const useForm = (initValues: any) => {
  const [data, setData] = useState(initValues);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.target;
    setData((data: any) => ({ ...data, [name]: value }));
  };

  return [data, handleChange];
};

export default useForm;

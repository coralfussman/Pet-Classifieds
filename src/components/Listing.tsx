import React from 'react';

export interface IProps {
  key: number;
  pets: {
    name?: string | null;
    age?: number | null;
    breed?: string | null;
    animal: string;
    description: string;
  };
}

const Listing = ({ pets }: IProps) => {
  return (
    <div id="card-col">
      <p>NAME:{pets.name}</p>
      <p>AGE:{pets.age}</p>
      <p>ANIMAL:{pets.animal}</p>
      <p>breed:{pets.animal}</p>
      <p> description:{pets.description}</p>
    </div>
  );
};

export default Listing;

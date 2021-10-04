import React from 'react';
import Listing from '../components/Listing';
interface IProps {
  pets: {
    name?: string | null;
    age?: number | null;
    breed?: string | null;
    animal: string;
    description: string;
  }[];
}
const Listings = ({ pets }: IProps) => {
  const petCard = pets.map((pet: any, i: number) => {
    return <Listing key={i} pets={pet} />;
  });
  return (
    <div id="listing-col">
      <h3>FOR SALE</h3>
      <div id="listing-row">{petCard}</div>
    </div>
  );
};
export default Listings;

import { FC, useState, useEffect } from 'react';
import WelcomeBar from '../components/WelcomeBar';
import Listings from '../containers/Listings';
import Modal from '../components/Modal';

export interface IState {
  pets: {
    name: string;
    age?: number;
    breed?: string;
    animal: string;
    description: string;
  }[];
}

const Dashboard: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [pets, setPets] = useState<IState['pets']>([]);

  const addPetEntry = (updatedPet: any): void => {
    let copyOfState = [...pets, updatedPet];

    setPets(copyOfState);
    return;
  };
  useEffect(() => {
    fetch('http://localhost:3004/pets')
      .then((r) => r.json())
      .then((data) => {
        setPets(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <WelcomeBar show={show} setShow={setShow} />
      <Modal
        show={show}
        setShow={setShow}
        setPets={setPets}
        addPetEntry={addPetEntry}
      />
      <Listings pets={pets} />
    </div>
  );
};
export default Dashboard;

import React, { SyntheticEvent, Dispatch, SetStateAction } from 'react';
import useForm from './useForm';
import { IProps } from '../components/Listing';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setPets: any; //Dispatch<SetStateAction<IProps>>;
  addPetEntry: any;
}

const Modal = ({ show, setShow, addPetEntry, setPets }: Props) => {
  const initState = {
    breed: '',
    name: '',
    animal: '',
    age: 0,
    description: '',
  };
  const [data, handleChange] = useForm(initState);

  const { breed, name, animal, age, description } = data;
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.persist();
    e.preventDefault();

    setShow(false);
    //setPets(initState);

    fetch(`http://localhost:3004/pets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      .then((r) => r.json())
      .then((createdPet) => {
        addPetEntry(createdPet);
      });
  };
  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={handleClose}>
      <div id="content" onClick={(e) => e.stopPropagation()}>
        <h2>List a Loving Pet</h2>
        <form onSubmit={handleSubmit}>
          <label>animal:</label>
          <input
            name="animal"
            placeholder="enter animal"
            onChange={handleChange}
            value={animal || ''}
          />
          <label>breed:</label>
          <input
            name="breed"
            placeholder="enter breed"
            onChange={handleChange}
            value={breed || ''}
          />

          <label>name:</label>
          <input
            name="name"
            placeholder="enter name"
            onChange={handleChange}
            value={name}
          />
          <label>age:</label>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            onChange={handleChange}
            value={age}
          />

          <label>description:</label>
          <textarea
            name="description"
            placeholder="about the pet"
            onChange={handleChange}
            value={description}
          />

          <input type="submit" className="submitButton" />
          <button className="submitButton" onClick={handleClose}>
            X Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

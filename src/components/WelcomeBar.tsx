import { Dispatch, SetStateAction } from 'react';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const WelcomeBar = ({ show, setShow }: Props) => {
  return (
    <div id="welcome-row">
      <h1>Find your Loving Friend a new Home </h1>
      <button
        className="submitButton"
        onClick={() => {
          setShow(true);
        }}
      >
        GET STARTED
      </button>
    </div>
  );
};
export default WelcomeBar;

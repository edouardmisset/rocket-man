import './Modal.css';

const Modal = ({ hasRocketLanded, realImage, name, description }) =>
  hasRocketLanded ? (
    <div className='modale'>
      <h2>{name}</h2>
      <h3>Descrition:</h3>
      <p>{description}</p>
      <p>diameter:</p>
      <p>population:</p>
    </div>
  ) : null;

export default Modal;

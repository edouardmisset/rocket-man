import './Modal.css';

const Modal = ({ hasRocketLanded, realImage, name, description }) =>
  hasRocketLanded ? (
    <div className='modale'>
      <img className='realImage' style={{width:100}}src={realImage} alt='img'></img>
      <h2>{name}</h2>
      <h3>Descrition:</h3>
      <p>{description}</p>
      <p>diameter:</p>

    </div>
  ) : null;

export default Modal;

import "./Modal.css";

const Modal = ({
  hasRocketLanded,
  realImage,
  name,
  description,
  density,
  gravity,
  diameter,
}) =>
  hasRocketLanded ? (
    <div className="modale">
      <h2>{name}</h2>
      <img src={realImage} alt="realImage" />
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Density : {density} g/cm3</p>
      <p>Gravity : {gravity} m/s2 </p>
      <p>Diameter : {diameter} km </p>
    </div>
  ) : null;

export default Modal;

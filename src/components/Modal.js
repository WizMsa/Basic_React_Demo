import './modal.css';
import { NavLink } from 'react-router-dom';
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={ showHideClassName } >
      <section className="modal-main">
        {children}
        <NavLink to= "../Admin" className="btn btn-danger nav-link text-light" type='button' onClick={handleClose}>Admin</NavLink>
        <NavLink to= "Supplier" className="btn btn-danger nav-link text-light" type='button' onClick={handleClose}>Supplier</NavLink>
        <button type="button" className='btn btn-outline-light btn-sm form-control' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;
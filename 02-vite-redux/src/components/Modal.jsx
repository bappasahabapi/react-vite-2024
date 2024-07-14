import { useDispatch, } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  //✅handle confirm
  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeModal())
  };

  //❌handle cancel
  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove All form Cart </h4>
        <div className="btn-container">
          <button
            onClick={handleConfirm}
            type="button"
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="btn clear-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

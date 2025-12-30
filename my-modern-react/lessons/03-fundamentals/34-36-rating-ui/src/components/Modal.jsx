import Button from './Button';

/*
  Modal is a simple, stateless component that displays a thank-you message
  It doesn't manage its own state; instead, it relies on props passed from a parent component.
  Props:
    isOpen: A boolean indicating whether the modal should be displayed.
    onClose: A function to be called when the modal is closed.
    rating: The rating value to be displayed in the thank-you message.
*/
const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank You</h2>
        <p>
          You rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <Button className='close-btn' onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;

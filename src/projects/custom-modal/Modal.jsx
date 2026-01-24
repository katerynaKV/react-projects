import './Modal.css';

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          {header}
        </div>

        <div className="body">{body}</div>

        <div className="footer">{footer}</div>
      </div>
    </div>
  );
}

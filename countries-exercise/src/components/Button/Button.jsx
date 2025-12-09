import './Button.css';

function Button({ children, className = 'primary-btn', onClick }) {
  return (
    <button className={`${className} flex-center`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

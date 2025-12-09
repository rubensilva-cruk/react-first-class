import { useEffect, useState } from 'react';
import './NamePopup.css';

export default function NamePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('username');
    if (!savedName) setIsOpen(true);
  }, []);

  const handleSave = () => {
    if (!name.trim()) return;
    localStorage.setItem('username', name.trim());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Welcome</h2>
        <p>Please enter your name:</p>

        <input
          className="popup-input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name..."
        />

        <button className="popup-button" onClick={handleSave}>
          Continue
        </button>
      </div>
    </div>
  );
}

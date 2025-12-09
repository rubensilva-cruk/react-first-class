import { useState } from 'react';
import './DropdownSelector.css';

export default function DropdownSelector({ setSelectedCategory }) {
  const [category, setCategory] = useState(null);
  const categories = [
    { id: 'favCountry', name: 'Fav Country' },
    { id: 'originCountry', name: 'Origin Country' },
    { id: 'vacationCountry', name: 'Vacation Country' },
  ];

  const handleChange = e => {
    const selectedId = e.target.value;
    if (!selectedId) {
      setSelectedCategory(null);
      return;
    }
    const selectedCategory = categories.find(cat => cat.id === selectedId);
    setCategory(selectedCategory);
  };

  const handleSave = e => {
    setSelectedCategory(category);
  };

  return (
    <div className="dropdown-selector">
      <select value={category?.id || ''} onChange={handleChange}>
        <option value="">
          {category ? category.name : 'Select an option...'}
        </option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button className="dropdown-button" onClick={handleSave}>
        Set Category
      </button>
    </div>
  );
}

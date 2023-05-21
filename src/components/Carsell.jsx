import React, { useState } from 'react';
import './Carsell.css';
const CarSell = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('Excellent');
  const [features, setFeatures] = useState([]);
  const [transmission, setTransmission] = useState('Automatic');
  const [priceRange, setPriceRange] = useState(5000);
  const [contactNumber, setContactNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};
    if (carMake.trim() === '') {
      errors.carMake = 'Car Make is required';
    }
    if (carModel.trim() === '') {
      errors.carModel = 'Car Model is required';
    }
    if (year.trim() === '') {
      errors.year = 'Year is required';
    }
    if (mileage.trim() === '') {
      errors.mileage = 'Mileage is required';
    }
    if (contactNumber.trim() === '') {
      errors.contactNumber = 'Contact Number is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Log the entered data in the console or perform any other action
      console.log({
        carMake,
        carModel,
        year,
        mileage,
        condition,
        features,
        transmission,
        priceRange,
        contactNumber
      });
      // Reset the form
      setCarMake('');
      setCarModel('');
      setYear('');
      setMileage('');
      setCondition('Excellent');
      setFeatures([]);
      setTransmission('Automatic');
      setPriceRange(5000);
      setContactNumber('');
      setFormErrors({});
    }
  };
  return (
    <div className='carsell'>
    <h1>Car Sell Form</h1>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Car Make:</label>
        <input
          type="text"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
        {formErrors.carMake && <span>{formErrors.carMake}</span>}
      </div>
      <div>
        <label>Car Model:</label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        {formErrors.carModel && <span>{formErrors.carModel}</span>}
      </div>
      <div>
        <label>Year:</label>
        <input
          type="date"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {formErrors.year && <span>{formErrors.year}</span>}
      </div>
      <div>
        <label>Mileage:</label>
        <input
          type="number"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        {formErrors.mileage && <span>{formErrors.mileage}</span>}
      </div>
      <div>
        <label>Condition:</label>
        <label>
          <input
            type="radio"
            value="Excellent"
            checked={condition === 'Excellent'}
            onChange={() => setCondition('Excellent')}
Excellent 
/>
</label>
<label>
<input
type="radio"
value="Good"
checked={condition === 'Good'}
onChange={() => setCondition('Good')}
/>
Good
</label>
<label>
<input
type="radio"
value="Fair"
checked={condition === 'Fair'}
onChange={() => setCondition('Fair')}
/>
Fair
</label>
<label>
<input
type="radio"
value="Poor"
checked={condition === 'Poor'}
onChange={() => setCondition('Poor')}
/>
Poor
</label>
</div>
<div>
<label>Features:</label>
<label>
<input
type="checkbox"
value="Air Conditioning"
checked={features.includes('Air Conditioning')}
onChange={(e) => {
if (e.target.checked) {
setFeatures([...features, 'Air Conditioning']);
} else {
setFeatures(features.filter((feature) => feature !== 'Air Conditioning'));
}
}}
/>
Air Conditioning
</label>
<label>
<input
type="checkbox"
value="Power Steering"
checked={features.includes('Power Steering')}
onChange={(e) => {
if (e.target.checked) {
setFeatures([...features, 'Power Steering']);
} else {
setFeatures(features.filter((feature) => feature !== 'Power Steering'));
}
}}
/>
Power Steering
</label>
<label>
<input
type="checkbox"
value="Power Windows"
checked={features.includes('Power Windows')}
onChange={(e) => {
if (e.target.checked) {
setFeatures([...features, 'Power Windows']);
} else {
setFeatures(features.filter((feature) => feature !== 'Power Windows'));
}
}}
/>
Power Windows
</label>
<label>
<input
type="checkbox"
value="ABS"
checked={features.includes('ABS')}
onChange={(e) => {
if (e.target.checked) {
setFeatures([...features, 'ABS']);
} else {
setFeatures(features.filter((feature) => feature !== 'ABS'));
}
}}
/>
ABS
</label>
<label>
<input
type="checkbox"
value="Navigation System"
checked={features.includes('Navigation System')}
onChange={(e) => {
if (e.target.checked) {
setFeatures([...features, 'Navigation System']);
} else {
setFeatures(features.filter((feature) => feature !== 'Navigation System'));
}
}}
/>
Navigation System
</label>
</div>
<div>
<label>Transmission:</label>
<select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
<option value="Automatic">Automatic</option>
<option value="Manual">Manual</option>
</select>
</div>
<div>
<label>Price Range:</label>
<input
type="range"
min={5000}
max={100000}
step={1000}
value={priceRange}
onChange={(e) => setPriceRange(Number(e.target.value))}
/>
<span>${priceRange}</span>
</div>
<div>
<label>Contact Number:</label>
<input
type="text"
value={contactNumber}
onChange={(e) => setContactNumber(e.target.value)}
/>
{formErrors.contactNumber && <span>{formErrors.contactNumber}</span>}
</div>
<button type="submit">Submit</button>
</form>
</div>
);
};
export default CarSell








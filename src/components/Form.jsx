import React, { useState } from 'react';
import './Form.css';
function LoanApplicationForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const validationErrors = {};
    
    if (!name) {
       validationErrors.name = 'Name is required';
     
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 65) {
      validationErrors.age = 'Age must be between 18 and 65';
    }

    if (!employmentStatus) {
      validationErrors.employmentStatus = 'Employment status is required';
    }

    if (!salaryRange) {
      validationErrors.salaryRange = 'Salary range is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit it
      setIsSubmitted(true);
      // Perform submission logic here
    } else {
      // Display validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div class="form">
      <h1>Requesting a Loan</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          
        </div>
        <div>
          <label>Phone Number:</label><br></br>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
        <div>
          <label>Age:</label><br></br>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label>Are You Enployment?</label><br></br>
          <input
            type="checkbox"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.checked)}
          />
          {errors.employmentStatus && (
            <p className="error">{errors.employmentStatus}</p>
          )}
        </div>
        <div>
          <label>Salary:</label><br></br>
          <input
            type="text"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
          />
          {errors.salaryRange && <p className="error">{errors.salaryRange}</p>}
        </div>
        <button type="submit" disabled={isSubmitted}>
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div className="modal">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
}

export default LoanApplicationForm;

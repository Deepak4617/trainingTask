// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";


// export const LoggedOut = () => {
   


//     return (
//         <>
//             <div className="container" >
//                 <div className="row">
//                     <div className="mb-3">
//                         <div className="col-sm-6">
//                             <button type="submit" className="btn btn-secondary" onClick={() => { logOut() }} >LogOut</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </>
//     )
// };
import React, { useState, useEffect } from 'react';

const CheckboxComponent = () => {
  // Initialize checkbox state with the stored state from local storage
  const [isChecked, setIsChecked] = useState(() => {
    const storedState = localStorage.getItem('checkboxState');
    return storedState === 'checked';
  });

  // Initialize input value with the stored value from local storage
  const [inputValue, setInputValue] = useState(() => {
    const storedValue = localStorage.getItem('inputValue');
    return storedValue || '';
  });

  // Update local storage when the checkbox state changes
  useEffect(() => {
    localStorage.setItem('checkboxState', isChecked ? 'checked' : 'unchecked');
  }, [isChecked]);

  // Update local storage when the input value changes
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  // Handle checkbox click
  const handleCheckboxClick = () => {
    // Toggle the checkbox state
    setIsChecked((prevChecked) => !prevChecked);
  };

  // Handle input change
  const handleInputChange = (e) => {
    // Update the input value
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} />
        Click me
      </label>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default CheckboxComponent;

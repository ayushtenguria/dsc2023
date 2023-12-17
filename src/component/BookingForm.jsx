// BookingForm.js
import React, { useState } from 'react';
import firebase from '../firebase';
import FormField from './FormField';

// const BookingForm = () => {
//   // State to manage form input values
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     age: '',
//     collegeName: '',
//     collegeRollNo: '',
//     collegeIdImage: null, // To store the selected file for College ID
//     aadharCardIdImage: null, // To store the selected file for Aadhar Card ID
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     gender: false,
//     age: false,
//     collegeName: false,
//     collegeRollNo: false,
//     collegeIdImage: false,
//     aadharCardIdImage: false,
//   });

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Function to handle file input changes
//   const handleFileChange = (e, type) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       [`${type}Image`]: file,
//     }));
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         errors[key] = true;
//       } else {
//         errors[key] = false; // Reset errors for filled fields
//       }
//     });

// // const errors = {};
// // Object.keys(formData).forEach((key) => {
// //   if (!formData[key]) {
// //     errors[key] = true;
// //   }
// // });

// setFormErrors(errors);

//     // If there are no errors, proceed with form submission to Firebase
//     if (Object.values(errors).every((error) => !error)) {
//         // Save the form data to Firebase
//         const bookingRef = firebase.database().ref('bookings');
//         bookingRef.push(formData);
  

// setFormData({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     age: '',
//     collegeName: '',
//     collegeRollNo: '',
//     collegeIdImage: null,
//     aadharCardIdImage: null,
//   });

// // If there are no errors, proceed with form submission logic
// if (Object.keys(errors).length === 0) {
//   // Add your logic for form submission here
//   console.log('Form submitted:', formData);
// } else {
//   console.log('Form has errors. Please fill out all required fields.');
// }
// };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//               First Name:
//             </label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded-md"
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
//               Last Name:
//             </label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded-md"
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
//               Gender:
//             </label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded-md"
//               type="text"
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
//               Age:
//             </label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded-md"
//               type="text"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
//             College Name:
//           </label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="text"
//             id="collegeName"
//             name="collegeName"
//             value={formData.collegeName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeRollNo">
//             College Roll No:
//           </label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="text"
//             id="collegeRollNo"
//             name="collegeRollNo"
//             value={formData.collegeRollNo}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeIdImage">
//             College ID (Image Upload):
//           </label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="file"
//             id="collegeIdImage"
//             name="collegeIdImage"
//             onChange={(e) => handleFileChange(e, 'collegeId')}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharCardIdImage">
//             Aadhar Card ID (Image Upload):
//           </label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="file"
//             id="aadharCardIdImage"
//             name="aadharCardIdImage"
//             onChange={(e) => handleFileChange(e, 'aadharCardId')}
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
//   };

// export default BookingForm;

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    collegeName: '',
    collegeRollNo: '',
    collegeIdImage: null,
    aadharCardIdImage: null,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    gender: false,
    age: false,
    collegeName: false,
    collegeRollNo: false,
    collegeIdImage: false,
    aadharCardIdImage: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [`${type}Image`]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((key) => {
      errors[key] = !formData[key];
    });

    setFormErrors(errors);

    if (Object.values(errors).every((error) => !error)) {
      const bookingRef = firebase.database().ref('bookings');
      bookingRef.push(formData);

      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        collegeName: '',
        collegeRollNo: '',
        collegeIdImage: null,
        aadharCardIdImage: null,
      });

      console.log('Form submitted and data saved to Firebase!');
    } else {
      console.log('Form has errors. Please fill out all required fields.');
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
    //   <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
    //   <form onSubmit={handleSubmit}>
    //     <FormField
    //       label="First Name"
    //       name="firstName"
    //       value={formData.firstName}
    //       onChange={handleInputChange}
    //       error={formErrors.firstName}
    //     />
    //     {/* Add more FormField components for each field */}
        
    //     <button
    //       type="submit"
    //       className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
  
  <div>BookingForm</div>
  
    );
};

export default BookingForm;
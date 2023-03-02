// import React, { useState } from 'react';

// const UploadForm = () => {
//   const [email, setEmail] = useState('');
//   const [ageConfirmation, setAgeConfirmation] = useState(false);
//   const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     setFiles([...files, ...e.target.files]);
//   };

//   const handleDelete = (file) => {
//     setFiles(files.filter((f) => f !== file));
//   };

//   const renderImageCards = () => {
//     return files.map((file) => (
//       <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={file.name}>
//         <div className="card">
//           <img className="card-img-top" src={URL.createObjectURL(file)} alt="" />
//           <div className="card-body">
//             <form>
//               <div className="form-group">
//                 <label htmlFor={`caption-${file.name}`}>Caption</label>
//                 <input type="text" name={`caption-${file.name}`} id={`caption-${file.name}`} className="form-control" placeholder="Enter caption" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor={`credits-${file.name}`}>Credits</label>
//                 <input type="text" name={`credits-${file.name}`} id={`credits-${file.name}`} className="form-control" placeholder="Enter credits" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor={`exclusive-${file.name}`}>Is the image exclusively submitted?</label>
//                 <select name={`exclusive-${file.name}`} id={`exclusive-${file.name}`} className="form-control">
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor={`copyright-${file.name}`}>
//                   Submitter holds the copyright or has the authority to submit from the copyright owner?
//                 </label>
//                 <select name={`copyright-${file.name}`} id={`copyright-${file.name}`} className="form-control">
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//               <button type="button" className="btn btn-danger" onClick={() => handleDelete(file)}>Delete</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // code to handle form submission
//   };

//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="ageConfirmation" checked={ageConfirmation} onChange={(e) => setAgeConfirmation(e.target.checked)} />
//             <label className="form-check-label" htmlFor="ageConfirmation">I confirm that I am 18 years or above</label>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="file">Choose file</label>
//           <input type="file" name="file" id="file" multiple onChange={handleFileChange} />
//         </div>
//         <div className="row mb-3">
//       {renderImageCards()}
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
//   </form>
// </div>
// );
// };

// export default UploadForm;

import React from 'react';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;

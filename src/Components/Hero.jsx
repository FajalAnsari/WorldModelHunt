// import React, { useState } from 'react';

// function App() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [images, setImages] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [captions, setCaptions] = useState([]);
//     const [modelNames, setModelNames] = useState([]);
//     const [credits, setCredits] = useState([]);

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleImageUpload = (event) => {
//         const files = Array.from(event.target.files);

//         const newImages = [];

//         files.forEach((file) => {
//             const reader = new FileReader();

//             reader.onloadend = () => {
//                 newImages.push(reader.result);
//                 setImages((prevImages) => [...prevImages, reader.result]);
//             };

//             reader.readAsDataURL(file);
//         });

//         setSelectedImage(newImages[0]);
//     };

//     const handleCaptionChange = (event, index) => {
//         const newCaptions = [...captions];
//         newCaptions[index] = event.target.value;
//         setCaptions(newCaptions);
//     };

//     const handleModelNameChange = (event, index) => {
//         const newModelNames = [...modelNames];
//         newModelNames[index] = event.target.value;
//         setModelNames(newModelNames);
//     };

//     const handleCreditChange = (event, index) => {
//         const newCredits = [...credits];
//         newCredits[index] = event.target.value;
//         setCredits(newCredits);
//     };

//     return (
//         <>
//             <div className='container bg-dark w-75 main-contianer'>
//                 <div className='row Pre p-5'>
//                     <div className='col-10 mx-auto'>
//                         <div className='row'>
//                             <div className='col-5'>
//                                 <input className='form-control' value={name} onChange={handleNameChange} type="text" placeholder='Enter Your Name:' />
//                             </div>
//                             <div className='col-5'>
//                                 <input className='form-control' value={email} onChange={handleEmailChange} type="text" placeholder='Enter Your Email:' />
//                             </div>
//                             <div className='col-2'>
//                                 <input type="file" className='form-control btn-outline-danger w-75' multiple onChange={handleImageUpload} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className='container bg-light w-75 main-contianer'>
//                     <div className='row p-5'>
//                         <div className='col-10 mx-auto'>
//                             <div className='row'>
//                                 <div className='col-10 mx-auto'>
//                                     {images.map((image, index) => (
//                                         <div className='col-6 d-flex' key={index}>
//                                             <img className='p-3 m-2 img-thumbnail' src={image} alt="preview" width="400" height="450" onLoad={() => setSelectedImage(image)} />
//                                             {selectedImage === image && (
//                                                 <div className='col-6 w-100 m-5'>
//                                                     <label>Caption:</label>
//                                                     <input className='form-control p-2 mt-2' type="text" value={captions[index] || ''} onChange={(event) => handleCaptionChange(event, index)}/>
//                                                     <label>Credits</label>
//                                                     <input className='form-control p-2  mt-2' type="text" value={modelNames[index] || ''} onChange={(event) => handleModelNameChange(event, index)}/>
//                                                     <label>Credits:</label> 
//                                                     <input className='form-control p-2  mt-2' type="text" value={credits[index] || ''} onChange={(event) => handleCreditChange(event, index)} />
//                                                     <label>Credits:</label>
//                                                     <input className='form-control p-2  mt-2' type="text" value={credits[index] || ''} onChange={(event) => handleCreditChange(event, index)} />
//                                                     <label>Credits:</label>
//                                                     <input className='form-control p-2  mt-2' type="text" value={credits[index] || ''} onChange={(event) => handleCreditChange(event, index)} />
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default App;



import React, { useState } from 'react';
import "../../src/App.css";

const UploadForm = () => {
  const [email, setEmail] = useState('');
  const [ageConfirmation, setAgeConfirmation] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleDelete = (file) => {
    setFiles(files.filter((f) => f !== file));
  };

  const renderImageCards = () => {
    return files.map((file) => (
      <div className="col-sm-6 col-md-4 col-lg-6 mb-6" key={file.name}>
        <div className="card">
          <img className="card-img-top img-thumbnail" src={URL.createObjectURL(file)} alt="" />
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor={`caption-${file.name}`}>Caption</label>
                <input type="text" name={`caption-${file.name}`} id={`caption-${file.name}`} className="form-control p-3 m-2" placeholder="Enter caption" />
              </div>
              <div className="form-group">
                <label htmlFor={`credits-${file.name}`}>Credits</label>
                <input type="text" name={`credits-${file.name}`} id={`credits-${file.name}`} className="form-control p-3 m-2" placeholder="Enter credits" />
              </div>
              <div className="form-group">
                <label htmlFor={`exclusive-${file.name}`}>Is the image exclusively submitted?</label>
                <select name={`exclusive-${file.name}`} id={`exclusive-${file.name}`} className="form-control m-2 w-25">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor={`copyright-${file.name}`}>
                  Submitter holds the copyright?
                </label>
                <select name={`copyright-${file.name}`} id={`copyright-${file.name}`} className="form-control m-2 w-25">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <button type="button" className="btn btn-danger p-2  w-50" onClick={() => handleDelete(file)}>Delete</button>
            </form>
          </div>
        </div>
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
  };

  return (
<div className='container bg-dark w-75 mt-5 main-contianer'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control w-25" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="ageConfirmation" checked={ageConfirmation} onChange={(e) => setAgeConfirmation(e.target.checked)} />
            <label className="form-check-label" htmlFor="ageConfirmation">I am 18 years or above</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose file</label>
          <input type="file" name="file" id="file" multiple onChange={handleFileChange} />
        </div>
        <div className="row mb-3">
      {renderImageCards()}
    </div>
    <button type="submit" className="btn btn-primary mb-3 p-3 w-25">Submit</button>
  </form>
</div>
);
};

export default UploadForm;
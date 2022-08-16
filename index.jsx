import React, { useState } from "react";
import ReactDOM from 'react-dom'
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState("")
  const [list, setList] = useState([])
  const handleSubmit = e =>{
    e.preventDefault()
    setList([...list, {img: URL.createObjectURL(selectedImage), status: status}])
    setStatus("")
    setSelectedImage(null)
  }
  return (
    <div>
      <h2>Akhtar Ali khan Mini Facebook</h2>
      {/* {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
      <br />
      <form onSubmit={handleSubmit}>

  
      <textarea
       placeholder="Write About"
       type="text"
       value={status} 
       onChange={(e) => setStatus(e.target.value)} /> 
      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <br />
      <input type="submit" value="submit" />
      </form>
      {list.map((x)=>(
        <div>
          <h2>{x.status}</h2>
          <img src={x.img} alt="" height="100px"/>
          </div>
      ))}
    </div>
  );
};
ReactDOM.render(<UploadAndDisplayImage/>, document.getElementById("root"))

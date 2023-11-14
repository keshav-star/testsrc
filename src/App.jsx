import { useState } from 'react'
import './App.css'
import { uploadFile } from 'react-s3';
import { Buffer } from "buffer/";
window.Buffer = Buffer;

function App() {
  const [count, setCount] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }


  let images = [
    {
      image: "pets/ca t.png"
    },
    {
      image: "pets/puppy.jpg"
    },
  ]

  const S3_BUCKET = 'viasuccess';
  const REGION = 'ap-south-1';
  const ACCESS_KEY = 'YOUR_ACAKIAUMDTMLYSMADRTYHUCESS_KEY';
  const SECRET_ACCESS_KEY = '5w0q5Cx/HuG5bOhIDKYYdJqmgUClvTNiIQx5TNp7';
  const DIR = 'Photos';

  const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    dirName: DIR,
  }

  return (
    <>
      <div className="images">

        <input type="file" onChange={handleFileInput} />
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>

        {images.map((item) => {
          return <img src={item.image} alt="" />
        })}
      </div>
    </>
  )
}

export default App

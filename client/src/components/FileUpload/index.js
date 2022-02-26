import React, {useRef,useState} from 'react';
import { uploadFile } from 'aws-sdk';
//require('dotenv').config()


var AWS = require("aws-sdk");
const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  dirName: process.env.REACT_APP_DIR_NAME /* optional */,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY
};




AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey
})
const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName},
  region: config.region,
})

function Fileupload() {
  console.log(`************** config ${JSON.stringify(config)}`)
  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
  }

  const uploadFile = (file) => {

      const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: config.bucketName,
          Key: `${config.dirName}\\${file.name}`,
          
      };

      myBucket.putObject(params)
          .on('httpUploadProgress', (evt) => {
              setProgress(Math.round((evt.loaded / evt.total) * 100))
          })
          .send((err) => {
              if (err) console.log(err)
          })
  }


  return <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput}/>
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
  </div>
}

export default Fileupload;
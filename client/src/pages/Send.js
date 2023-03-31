import React, { useState } from 'react'

export default function Send() {

  const [Image, setImage] = useState(null)
  
  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.target.files || evt.dataTransfer.files;

    var fileList = document.createElement('ul');
    for (var i = 0, f; f = files[i]; i++) {
      var listItem = document.createElement('li');
      listItem.innerHTML = f.name + ' (' + f.type + ') - ' + f.size + ' bytes';
      fileList.appendChild(listItem);
    }

    var uploadBox = document.getElementById('upload-box');
    uploadBox.innerHTML = '';
    uploadBox.appendChild(fileList);
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  const submitClick = (e)=>{
    if(Image == null){
      alert('Please select a file to send.');
      return;
    }
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      
    e.preventDefault()
    let formData =new FormData()
    formData.append('image',Image)
    console.log(formData)
    console.log([...formData])

    //Api code example to post image 
    
    // axios.post("/api/admin/add-new-radioCat",formData, {
    //     headers: { 
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJTdXBlciIsImxhc3RuYW1lIjoiQWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AYWdyaXBhbC5jb20iLCJpYXQiOjE2NjE5NTY4Nzl9.AIEwmCFJkySVinJMIPSWs2PjibQkkPgG-AX3fHtHHSA'
    //   }
    // }).then(
    //     (response) => {
    //         console.log(response.data)
    //             alert('Your file has been successfully sent');
    //     },
    //     (error) => {
    //         if (error.response.status == 401) {
    //         }
    //     }
    // );

  }

}

  // Add event listener to send button
  function handleSendEvent(){
    var fileList = document.querySelector('ul');
    if (!fileList || fileList.children.length === 0) {
      
    }

    // Show notification
    
  }


  return (
    <div>
      <h1>Send Files</h1>
      <div id="upload-box" ondragover="handleDragOver(event)" ondrop="handleFileSelect(event)">
        <p>Drag and drop your files here, or</p>
        <label for="file-upload" class="custom-file-upload">
        <input id='file-upload' type="file" class="basic-filepond" name='image'  onChange={(e)=>{setImage(e.target.files[0])}} />
          Choose files
        </label>
      </div>
      <button id="send-btn" onClick={(e)=>{submitClick(e)}} type="submit">Send</button>


    </div>
  )
}

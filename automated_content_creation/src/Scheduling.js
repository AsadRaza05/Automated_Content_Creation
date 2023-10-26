import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const Scheduling = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [scheduledTime, setScheduledTime] = useState('');
  const [uploadOption, setUploadOption] = useState('now');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleVideoFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleScheduledTimeChange = (event) => {
    setScheduledTime(event.target.value);
  };

  const handleUploadOptionChange = (event) => {
    setUploadOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission based on uploadOption
    console.log('Author:', author);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Video File:', videoFile);
    console.log('Scheduled Time:', scheduledTime);
    console.log('Upload Option:', uploadOption);
  };


  return (
    <div>
      <h1>Automated Content Creation</h1>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/Scheduling">Scheduling</a>
        <a href="/Analytics">Analytics</a>
      </div>
    
    <div className="scheduling-container">
      <div className="form-container">
        <h2>Video Scheduling</h2>
        <form>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={handleAuthorChange}
              required
            />
          </div>

          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>

          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>

          <div>
            <label>Choose Video:</label>
            <input
              type="file"
              accept=".mp4, .mov, .avi"
              onChange={handleVideoFileChange}
              required
            />
          </div>

          {/* <button type="button" onClick={handleUploadNow}>Upload Now</button>
          <button type="button" onClick={handleUploadLater}>Upload Later</button> */}

          <div>
            <label>Upload Option:</label>
            <select onChange={handleUploadOptionChange} value={uploadOption}>
              <option value="now">Upload Now</option>
              <option value="later">Upload Later</option>
            </select>
          </div>

          {uploadOption === 'later' && (
            <div>
              <label>Scheduled Time:</label>
              <input
                type="datetime-local"
                value={scheduledTime}
                onChange={handleScheduledTimeChange}
                required
              />
            </div>
          )}

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
    </div>  
  );
}

export default Scheduling;

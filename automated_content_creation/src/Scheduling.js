import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Scheduling = () => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [scheduledTime, setScheduledTime] = useState('');
  const [uploadOption, setUploadOption] = useState('now');

  const navigate = useNavigate();

  useEffect(() => {
    const userEmailFromState = location.state?.userEmail;
    setUserEmail(userEmailFromState || localStorage.getItem('userEmail') || '');
  }, [location.state]);

  const videoApiLink = `https://api.seniorproject.xyz/api/videos/${userEmail}`;

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('author', author);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('videoFile', videoFile);
      formData.append('scheduledTime', scheduledTime);
      formData.append('uploadOption', uploadOption);

      const response = await axios.post(videoApiLink, formData);

      console.log('API response:', response.data);

      navigate('/Home');
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };

  return (
    <div>
      <h1>Automated Content Creation</h1>
      <div className="navbar">
        <a href="/Home">Home</a>
        <a href="/Scheduling">Scheduling</a>
        <a href="/Analytics">Analytics</a>
        <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
      </div>

      <div className="scheduling-container">
        <div className="form-container">
          <h2>Video Scheduling</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Author:</label>
              {/* <p>User Email: {userEmail}</p> */}
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

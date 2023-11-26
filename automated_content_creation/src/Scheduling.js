import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logos from '../src/images/logos.png';
import {MenuItem, FormControl, InputLabel, Select,} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { format, parse, addHours } from 'date-fns';



const Scheduling = () => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState('');
  const [videoType, setvideoType] = useState('AskReddit')
  const [selectedTime, setSelectedTime] = useState(null);
  const [scheduleResponse, setscheduleResponse] = useState([])

  const navigate = useNavigate();
  const storedEmail = localStorage.getItem('email')

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const { data } = await axios.get(`http://localhost:5000/api/video-schedule/${storedEmail}`);
        setscheduleResponse([data]);
        console.log(scheduleResponse)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    const userEmailFromState = location.state?.userEmail;
    setUserEmail(userEmailFromState || localStorage.getItem('userEmail') || '');
    fetchData()
    
    console.log(storedEmail)
    
  }, [location.state]);

  
  useEffect(() => {
    console.log(scheduleResponse);
  }, [scheduleResponse]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //this will post the video and send the data in the body of the request
      const time = selectedTime
      const videoApiLink = `http://localhost:5000/api/video-schedules/${storedEmail}`;
      const response = await axios.put(videoApiLink, {videoType,time});

      console.log('API response:', response.data);

      // navigate('/Home');
      console.log(videoType)
      console.log(selectedTime)
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
    <div>
      {/* header */}
      <div className="navbar">
        <div className="logo">
          <img src={logos} alt="ACC" ></img>
        </div>
        <div className="nav-content">
          <a href="/Home">Home</a>
          <a href="/Scheduling">Scheduling</a>
          <a href="/Analytics">Analytics</a>
          <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>


      <div className="scheduling-container">
        <div className="form-container">
          <h2>Video Scheduling</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Video type</label>
              <FormControl fullWidth>
                
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={videoType}
                  onChange={(event) => {
                    setvideoType(event.target.value);
                  }}
                >
                  <MenuItem value={'AskReddit'}>Ask Reddit</MenuItem>
                  <MenuItem value={'CrimeStories'}>Crime Stories</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className='time-pick'>
              <label>Time:</label>
            </div>
            <TimePicker
                className='time-pick'
                value={selectedTime}
                onChange={(newTime) => {
                  // Use the format functdion to extract hh:mm from newTime
                  
                  console.log(newTime)
                  const strTime = String(newTime.$H)+":"+String(newTime.$M)
                  const parsedDate = parse(strTime, 'HH:mm', new Date());
                  const formattedTime = format(parsedDate, 'HH:mm');
                  console.log(formattedTime)
                  setSelectedTime(formattedTime);
                }}
              />

           
            <button type="submit">Schedule</button>

          </form>
        </div>
        <div className='schedulePopulaterHeading'>
          <h1>Current Schedule</h1>
        </div>
        {scheduleResponse.map((schedule) => (
          <div key={schedule._id} className='schedulePopulater'>
            {schedule.videos.map((video) => (
              <div key={video._id} className='schedulePopulaterBoxLeft'>
                <div>{video.videoType}</div>
                <div>{video.time}</div>
              </div>
            ))}
            
          </div>
        ))}
      </div>
    </div>
    </LocalizationProvider>
  );
}

export default Scheduling;

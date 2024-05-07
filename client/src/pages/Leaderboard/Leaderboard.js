import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import { useLocation, useParams } from 'react-router-dom';

const Leaderboard = () => {
  const [selectedPose, setSelectedPose] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [title, setTitle] = useState('');
  const [usernames, setUsernames] = useState([]);
  const [userWithBestTime, setUserWithBestTime] = useState(null);

  const data = useParams();

  useEffect(() => {
    handlePoseSelect(data.poseId);
  }, [data.poseId]);

  const CLASS_NO = {
    Utkatasana: 0,
    Bhujangasana: 1,
    Adhomukhasvanasana: 2,
    No_Pose: 3,
    Sarvangasana: 4,
    Traingle: 5,
    Vrikshasana: 6,
    Virabhadrasana: 7,
  }

  const asanas = [
    { id: 0, name: "Utkatasana" },
    { id: 1, name: "Bhujangasana" },
    { id: 2, name: "Adhomukhsvanasana" },
    { id: 3, name: "No_Pose" },
    { id: 4, name: "Sarvangasana" },
    { id: 5, name: "Trikonasana" },
    { id: 6, name: "Vrikshasana" },
    { id: 7, name: "Virabhadrasana" }
  ];

  const getData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8800/api/user/getUser/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.username;
    } catch (err) {
      console.error('Error fetching data:', err);
      return id;
    }
  }

  const handlePoseSelect = async (poseId) => {
    setSelectedPose(poseId);

    const pose = asanas.find((pose) => pose.id === parseInt(poseId));
    setTitle(pose);

    try {
      const response = await fetch(`http://localhost:8800/api/record/getRecord`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ poseId: poseId }),
      });
      const data = await response.json();
      setLeaderboardData(data);

      // Filter out duplicate users and keep only the one with the highest bestTime
      const filteredData = {};
      data.forEach(entry => {
        if (!filteredData[entry.userId] || entry.bestTime > filteredData[entry.userId].bestTime) {
          filteredData[entry.userId] = entry;
        }
      });

      // Fetch usernames for filtered data and store them in the state
      const usernamesPromises = Object.keys(filteredData).map(userId => getData(userId));
      const resolvedUsernames = await Promise.all(usernamesPromises);
      setUsernames(resolvedUsernames);
      setUserWithBestTime(filteredData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='leaderboard'>
      <h1>Yoga Pose Leaderboard</h1>

      {selectedPose && (
        <div>
          <h2>Leaderboard for Pose {title.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {userWithBestTime && Object.values(userWithBestTime).map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{usernames[index]}</td>
                  <td>{entry.bestTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;

import React, { useState } from 'react';
import "./skills.scss";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function SkillsInput() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
      setShowPopup(true);
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="skills-container">
      <h2>Add Your Skills</h2>
      <div className="input-container">
        <Input
          placeholder='Enter a skill'
          value={newSkill}
          onChange={handleInputChange}
        />
        <Button
          variant='outlined'
          color="primary"
          className="add-button"
          onClick={handleAddSkill}
        >
          Add
        </Button>
      </div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => handleRemoveSkill(index)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>
              &times;
            </span>
            <p>Skill added successfully!</p>
          </div>
        </div>
      )}
      <Link to="/home">
        <Button
          variant="contained"
          color="primary"
          className="submit-button"
          type="submit"
        >
          Submit
        </Button>
      </Link>
    </div>
  );
}

export default SkillsInput;

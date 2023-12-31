import React, { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './App.css';

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
];

const App = () => {
  const [skill, setSkill] = useState(skills);

  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList skills={skill} />
      <hr />
      <NewSkillForm />
    </div>
  );
};

export default App;

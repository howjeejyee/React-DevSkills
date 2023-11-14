import React from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

const App = () => {
  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
};

export default App;

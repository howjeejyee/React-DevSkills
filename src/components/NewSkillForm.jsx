import React from 'react';
import LevelSelectOptions from './selectOption';

const NewSkillForm = () => {
  return (
    <form>
      <label>
        Skill: <input type="text" placeholder="Enter skill" />
      </label>
      <label>
        Level: <select>{ <LevelSelectOptions /> }</select>
      </label>
      <button>Add Skill</button>
    </form>
  );
};

export default NewSkillForm;

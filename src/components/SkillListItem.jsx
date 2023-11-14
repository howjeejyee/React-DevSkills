import React from 'react';
import './SkillListItem.css';

const SkillListItem = ({ name, level }) => {
  return (
    <li className="SkillListItem">
      {name} (Level {level})
    </li>
  );
};

export default SkillListItem;

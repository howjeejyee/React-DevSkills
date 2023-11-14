import React from 'react';
import SkillListItem from './SkillListItem';
import './SkillList.css';

const SkillList = ({ skills }) => {
  return (
    <div className="SkillListContainer">
      <ul>
        {skills.map((skill, index) => (
          <SkillListItem key={index} name={skill.name} level={skill.level} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

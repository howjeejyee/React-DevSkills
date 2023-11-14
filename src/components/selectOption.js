import React from 'react';

const LevelSelectOptions = () => {
  const options = [];

  for (let i = 1; i <= 5; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return options;
};

export default LevelSelectOptions;

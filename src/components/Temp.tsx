import React from 'react';
type Prop = {
  temp: number;
};

const Temp = ({ temp }: Prop) => {
  return (
    <React.Fragment>
      {Math.round(temp)}
      <span>&#176;</span>
    </React.Fragment>
  );
};
export default Temp;

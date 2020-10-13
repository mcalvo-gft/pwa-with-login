import React, { ReactElement, useEffect, useState } from 'react';
import { differenceFromNow, timeToJSON } from '../../helpers/time';
import SimpleCounter from '../simple-counter/simple-counter';

interface LastAccessCounterProps {
  lastAccessTime: Date;
}

const LastAccessCounter = ({ lastAccessTime }: LastAccessCounterProps): ReactElement => {
  const [diff, setDiff] = useState(differenceFromNow(lastAccessTime));

  useEffect(() => {
    setInterval(() => {
      const diff = differenceFromNow(lastAccessTime);
      setDiff(diff);
    }, 1e3);
  }, []);

  const { days, hours, minutes, seconds } = timeToJSON(diff);

  return (
    <div>
      <SimpleCounter label="days" value={days} />
      <SimpleCounter label="hours" value={hours} />
      <SimpleCounter label="minutes" value={minutes} />
      <SimpleCounter label="seconds" value={seconds} />
    </div>
  );
};

export default LastAccessCounter;

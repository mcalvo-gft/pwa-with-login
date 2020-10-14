import LastAccessCounter from 'components/last-access-counter/last-access-counter';
import React, { ReactElement, useEffect, useState } from 'react';
import * as AuthenticationService from 'services/authentication.service';

const Welcome = (): ReactElement => {
  const [lastAccess, setLastAccess] = useState<Date | null>(null);

  useEffect(() => {
    AuthenticationService.getLastAccess().then(
      (time) => time instanceof Date && setLastAccess(time)
    );
  }, []);

  return <div>{lastAccess !== null && <LastAccessCounter lastAccessTime={lastAccess} />}</div>;
};

export default Welcome;

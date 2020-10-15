import React, { ReactElement } from 'react';

const Avatar = (): ReactElement => {
  const img =
    'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg';

  return <img src={img}></img>;
};

export default Avatar;

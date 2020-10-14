import React, { ReactElement } from 'react';
import Welcome from './pages/welcome/welcome';

// import styles from 'styles/app.scss';

function App(): ReactElement {
  return (
    <div className="App">
      {/* <Login /> */}
      <Welcome />
    </div>
  );
}

export default App;

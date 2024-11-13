import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Jika Anda memiliki file CSS global
import { IonApp } from '@ionic/react';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

ReactDOM.render(
  <React.StrictMode>
    <IonApp>
      <App />
    </IonApp>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './forms/main-view/main-view';
import './styles/index.scss';

const APP_ID = 'template-manager-system';

ReactDOM.render(
    <MainView />,
    document.getElementById(APP_ID)
);

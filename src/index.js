import React from 'react';
import ReactDOM from 'react-dom';
import TeamOne from './TeamOne';
import TeamTwo from './TeamTwo';

ReactDOM.render(
    <TeamOne/>,
    document.getElementById('team1'),
);

ReactDOM.render(
    <TeamTwo/>,
    document.getElementById('team2'),
);
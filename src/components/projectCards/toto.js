import * as React from 'react';
import { Card } from 'theme-ui';

const ProjectTotoCard = () => {
  return (
    <Card >
        <h3>Toto Social Betting App</h3>
        <text>
            Using JavaScript, React, postgreSQL, Heroku Cloud, and react-bootstrap for building an application for managing weely bets on sports games.
            The users sets their bets on a list of soccer games that the admin user generated. The admin also updates the actual game score and the bet points are calculated automatically.
            The app is used by actual users among my friends that needed a solution for their weekly bets game that the used to manage manually.
        </text> <br/>
        <a href='https://github.com/dani754/TOTO'  >Go to GitHub frontend repo --> </a>
        <span/>
        <a href='https://github.com/dani754/toto-server'  >Go to GitHub backend repo --> </a>
        <span/>
        <a href='/projects/toto'  > demo and screenshots --> </a>
    </Card>
  );
}

export default ProjectTotoCard;

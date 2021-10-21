import * as React from 'react';
import Link from 'gatsby';
import { Card, Button } from 'theme-ui';

const ProjectTotoCard = () => {
  return (
    <Card >
        <h3>Toto Social Betting App</h3>
        <text>
            Using ReactJS, NodeJS, postgreSQL, Heroku Cloud, and react-bootstrap for building an application for managing weely bets on sports games.
            The users sets their bets on a list of soccer games that the admin user generated. The admin also updates the actual game score and the bet points are calculated automatically.
            The app is used by actual users among my friends that needed a solution for their weekly bets game that the used to manage manually.
        </text> <br/>
        <Button ><a href='https://github.com/dani754/TOTO'  >GitHub (frontend)</a></Button>
        <Button ><a href='https://github.com/dani754/toto-server'  >GitHub (backend)</a></Button>
        <Button ><a href='/projects/toto' >Demo & screenshots</a></Button>
        <Button ><a href='/projects' >See All Projects</a></Button>
    </Card>
  );
}

export default ProjectTotoCard;

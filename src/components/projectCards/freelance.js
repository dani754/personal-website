import * as React from 'react';
import { Card, Button } from 'theme-ui';

const ProjectFreelanceCard = (props) => {
  return (
    <Card >
        <h3>Finance and Accounting App</h3>
        <text>
            Using Java, Spring, Hibernate, JDBC, PostgreSQL and JavaFX for building a Financial application for accounting and more. The project is still in progress.
        </text> <br/>
        <a href='https://github.com/dani754/freelance'  >Go to GitHub full repo --> </a>
        <span/>
        <a href='/projects/freelance' >demo and screenshots --></a>
    </Card>
  );
}

export default ProjectFreelanceCard;

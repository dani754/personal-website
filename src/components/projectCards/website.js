import * as React from 'react';
import { Card, Button } from 'theme-ui';

const ProjectWebsiteCard = (props) => {
  return (
    <Card >
        <h3>This site - portfolio & blog website</h3>
        <text>
            Using ReactJS, Gatsby, Gatsby Cloud, GraphQL, and ThemeUI for building a static React based website with future options for scaling, fast rendering and implementing other plugins thanks to the popularity and large community of the tools and frameworks mentioned.
        </text> <br/>
        <Button><a href='https://github.com/dani754/personal-website'  >GitHub repo</a></Button>
    </Card>
  );
}

export default ProjectWebsiteCard;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red , blue} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({ img, caption }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=''>
    <div className=' flex justify-center font-bold text-2xl text-green-900 font-serif'>
    Welcome to the Social Media Page!
    </div>
    <Card  className="m-10 w-[500px] h-[70vh]" sx={{border: '2px solid black', color:'#000000' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions className=' mx-2' disableSpacing>
        <IconButton className=' mx-2' sx={{ bgcolor: red[500] }} aria-label="add to favorites">
          <FavoriteIcon  />
        </IconButton>
        <IconButton className=' mx-2' sx={{ bgcolor: blue[500] }} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Building a drone from scratch involves multiple steps and requires careful planning. Here's a step-by-step guide based on my hypothetical experience:

            Step 1: Research and Education
            Start by immersing yourself in drone technology. Understand the fundamentals of aerodynamics, electronics, and programming. Explore existing drone designs and technologies. Familiarize yourself with safety regulations in your area.

            Step 2: Define Purpose and Specifications
            Decide on the drone's purpose. Is it for photography, racing, or surveillance? Determine specifications such as weight, size, flight time, and payload capacity based on your intended use.

            Step 3: Design
            Sketch a basic design layout considering factors like aerodynamics and weight distribution. Choose materials that balance strength and weight. Utilize CAD software to create a detailed 3D model of your drone.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

export default RecipeReviewCard;
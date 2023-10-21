import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Collapse } from '@mui/material';
import stephan from "../images/stephan king.webp";
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/UseWindowPosition';
import carls from "../images/carls.jpg";

const useStyles = makeStyles((theme) => ({
   

}));

export default function ImageCard2() {
    const IsChecked1 = useWindowPosition("myDownContainerId2");

  return (
    <Collapse in={IsChecked1} {...(IsChecked1 ? { timeout: 2000 } : {})} CollapsedHeight={50}>

    <Card sx={{ maxWidth: 445, borderRadius: '12px' , backgroundColor: 'rgba(0, 0, 0, 0.3)',
    transform: IsChecked1
            ? 'translateX(0)' 
            : 'translateX(90%)', 
          transition: 'transform 1s',}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          image={carls}
          alt="green iguana"
          

        />
        <CardContent>
          <Typography sx={{ fontFamily: 'Nunito, sans-serif', fontWeight: 'bold', color: 'white' }} gutterBottom variant="h5" component="div">
          Carl Sagan
          </Typography>
          <Typography sx={{ fontFamily: 'Nunito, sans-serif', fontWeight: 'italic', color: 'white' }} variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </Collapse>

  );
}

import React from 'react';
import './Events.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <section className="events">
      <Container>
        <div className="card-text">
          <h2>
            <span> TIN TỨC & SỰ KIỆN</span>{' '}
          </h2>
        </div>
        <div className="cards">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="card-bg"
                image="http://ama.com.vn/wp-content/uploads/2019/05/POPUP-GOVAP-01-1-300x225.png"
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Anh Ngữ 3S khai trương chi nhánh tại Đà Nẵng
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className="btn-learn">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="cards">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="card-bg"
                image="http://ama.com.vn/wp-content/uploads/2019/05/0531-hinhpr-01-300x225.png"
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Anh Ngữ 3S khai trương chi nhánh tại Đà Nẵng
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className="btn-learn">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="cards">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="card-bg"
                image="http://ama.com.vn/wp-content/uploads/2019/05/0531-hinhpr-01-300x225.png"
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Anh Ngữ 3S khai trương chi nhánh tại Đà Nẵng
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className="btn-learn">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="btn-events">
          <Button>LEARN MORE</Button>
        </div>
      </Container>
    </section>
  );
}

/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <section className="course">
      <Container>
        <h2 className="text-course">
          <span>CÁC KHÓA HỌC TẠI 3S</span>
        </h2>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className="course-item">
                  <div className="course-img">
                    <img src="http://ama.com.vn/wp-content/uploads/2018/06/1.jpg" />
                  </div>
                  <div className="course-content">
                    <a href="#">Tiếng Anh mẫu giáo 4-6 tuổi</a>
                    <button>SMART KIDS</button>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className="course-item">
                  <div className="course-img">
                    <img src="http://ama.com.vn/wp-content/uploads/2018/06/2.jpg" />
                  </div>
                  <div className="course-content">
                    <a href="#">Tiếng Anh mẫu giáo 4-6 tuổi</a>
                    <button>SMART KIDS</button>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className="course-item">
                  <div className="course-img">
                    <img src="http://ama.com.vn/wp-content/uploads/2018/06/3.jpg" />
                  </div>
                  <div className="course-content">
                    <a href="#">Tiếng Anh mẫu giáo 4-6 tuổi</a>
                    <button>SMART KIDS</button>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className="course-item">
                  <div className="course-img">
                    <img src="http://ama.com.vn/wp-content/uploads/2018/06/4.jpg" />
                  </div>
                  <div className="course-content">
                    <a href="#">Tiếng Anh mẫu giáo 4-6 tuổi</a>
                    <button>SMART KIDS</button>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

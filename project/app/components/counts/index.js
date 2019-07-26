/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './Counts.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <section className="counts">
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className="numbers">470+</div>
                <div className="text-counts">
                  <p>GIÁO VIÊN BẢN NGỮ</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className="numbers">20.000+</div>
                <div className="text-counts">
                  <p>HỌC VIÊN TOÀN QUỐC</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className="numbers">15</div>
                <div className="text-counts">
                  <p>KINH NGHIỆM</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div className="numbers">11</div>
                <div className="text-counts">
                  <p>TRUNG TÂM TẠI TP.HCM</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

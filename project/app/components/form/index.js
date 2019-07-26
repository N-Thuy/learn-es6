import React from 'react';
import './style.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <section className="form">
      <Container>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <div className="form-img">
                  <img
                    src="http://ama.com.vn/wp-content/uploads/2017/10/am.png"
                    alt=""
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} className="form-around">
              <Paper className={classes.paper}>
                <div className="form-item">
                  <h3>ĐĂNG KÝ TƯ VẤN</h3>
                  <p>
                    Vui lòng điền đầy đủ thông tin, chuyên viên tư vấn của 3S sẽ
                    liên lạc với bạn trong vòng 24 giờ.
                  </p>
                  <Icon class="material-icons">assignment</Icon>
                  <form
                    className="form-gr"
                    action="/action_page.php"
                    method="get"
                  >
                    <input
                      type="text"
                      name="fname"
                      placeholder="Họ và tên Học Viên"
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Ngày tháng năm sinh Học Viên"
                    />
                    <br />
                    <input
                      type="text"
                      name="fname"
                      placeholder="Họ và tên Học Viên"
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Ngày tháng năm sinh Học Viên"
                    />
                    <br />
                    <input
                      type="text"
                      name="fname"
                      placeholder="Họ và tên Học Viên"
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Ngày tháng năm sinh Học Viên"
                    />
                    <br />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Ngày tháng năm sinh Học Viên"
                    />
                    <br />
                    <input type="submit" value="ĐĂNG KÝ NGAY" />
                  </form>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

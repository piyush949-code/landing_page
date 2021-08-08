import React from 'react'
import './component.css'
function ProjectCard() {
  return (
    <div style={{ width: '90%', backgroundColor: 'white', 
                  padding: '10px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
           <h5>House/Objects Price Prediction</h5>
           <p></p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
           <h5>Beverage/Wine Quality prediction</h5>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
         <h5>Churn/ Attrition Prediction</h5>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
             <h4>Tensor Project</h4>
             <h5>Air jet passenger satisfaction</h5>
          </Paper>
        </Grid>
</Grid>

{/* second row  */}

<Grid container spacing={3}>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
           <h5>House/Objects Price Prediction</h5>
           <p></p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
           <h5>Beverage/Wine Quality prediction</h5>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
           <h4>Tensor Project</h4>
         <h5>Churn/ Attrition Prediction</h5>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
             <h4>Tensor Project</h4>
             <h5>Air jet passenger satisfaction</h5>
          </Paper>
        </Grid>
</Grid>


    </div>
  );
}

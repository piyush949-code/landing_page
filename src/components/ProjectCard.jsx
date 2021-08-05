import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  }),
);
  
export default function FullWidthGrid() {
  const classes = useStyles();
  
  return (
    <div style={{ width: '90%', backgroundColor: 'blue', 
                  padding: '10px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <h1>Tensor</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam excepturi dignissimos repudiandae voluptas voluptates maiores deleniti quibusdam, non exercitationem hic similique perferendis nam laborum dolores quidem dolorem delectus blanditiis.
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <h1>Tensor</h1>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quia voluptatum sed sunt neque veniam aut, omnis maiores qui possimus, ipsam quis inventore sint ipsum, aliquid nihil iste eum.
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          <h1>Tensor</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi obcaecati quam, reprehenderit aspernatur neque vitae quisquam cumque deserunt eius. Iure culpa ex officia reprehenderit sequi, officiis adipisci quo similique numquam.
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <h1>Tensor</h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero autem nisi corrupti culpa eos repellat rerum molestias nostrum sed illum pariatur accusantium, odio et veniam deserunt vitae nesciunt, ipsum deleniti?

          </Paper>
        </Grid>
        
        
      </Grid>
    </div>
  );
}
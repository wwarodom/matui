import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard'
import Material from "./material/index";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function CenteredGrid(props) {
    const {classes, menuIndex,data} = props;

    const kpiItems = [
        {id:1, topic:'ผลสอบภาษาอังกฤษของนักศึกษา', score: 88, coc:30, fte:25,fht:15,fis:15,max:1 },
        {id:2, topic:'ร้อยละของนักศึกษาที่จบตามเวลา (ปริญญาตรี)', score: 87, coc:32,fte:65,fht:25,fis:15, max:2 },
        {id:3, topic:'จำนวนนักศึกษาระดับปริญญาตรีที่ได้รับรางวัล', score: 52, coc:30,fte:25,fht:33,fis:75, max:4 },
        {id:4, topic:'จำนวนรางวัลที่นักศึกษาระดับปริญญาตรีได้รับในระดับชาติ (สหกิจศึกษา)', score: 11, coc:30,fte:45,fht:25,fis:15, max:2 },
        {id:5, topic:'ร้อยละของบัณฑิตระดับปริญญาตรีที่ได้งานทำหรือประกอบอาขีพอิสระภายใน 1 ปี', score: 13, coc:20,fte:25,fht:45,fis:15, max:3 } ]

    const matItems = [
        {id:1, topic:'จำนวนนับครุภัณฑ์', score: 88, coc:30, fte:25,fht:15,fis:15,max:1 } ]

    const displayCards = () =>  kpiItems.map( (item,key) =>
             <Grid container spacing={24} key={key}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SimpleCard {...item} />
                    </Paper>
                </Grid>
            </Grid>
        )

    const displayMaterial = () => <Material data={data} />



    return (
        <div className={classes.root}>
            {(menuIndex === 0 )?displayCards():displayMaterial()}
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);







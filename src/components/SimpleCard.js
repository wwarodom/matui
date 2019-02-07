import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BadgeMax from './BadgeMax'

const styles = {
    card: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes,id,topic,score,coc,fte,fht,fis,max} = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
            <Card className={classes.card}>
            <CardContent >
                <Typography variant="h5" component="h2"  >
                    {id}. {topic} {score}%
                </Typography>
            </CardContent>
            <CardActions   style={{justifyContent: 'center'}}>
                <BadgeMax
                    coc={coc}
                    fte={fte}
                    fht={fht}
                    fis={fis}
                    max={max}   />
            </CardActions>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

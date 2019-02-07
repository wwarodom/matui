import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import {Computer, Spa, AirplanemodeActive, Language } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 3,
    },
});

function BadgeMax(props) {
    const { classes,coc, fte, fht, fis, max } = props;

    return (
        <React.Fragment>
            <Badge className={classes.margin} badgeContent={`${coc}%`}  color={(max===1)?'secondary':'primary'} >
                CoC <Computer />
            </Badge>
            <Badge className={classes.margin} badgeContent={`${fte}%`}  color={(max===2)?'secondary':'primary'}>
                FTE <Spa />
            </Badge>
            <Badge className={classes.margin} badgeContent={`${fht}%`}  color={(max===3)?'secondary':'primary'} >
                FHT <AirplanemodeActive />
            </Badge>
            <Badge className={classes.margin}   badgeContent={`${fis}%`}  color={(max===4)?'secondary':'primary'}>
                FIS <Language />
            </Badge>
        </React.Fragment>
    );
}

BadgeMax.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BadgeMax);
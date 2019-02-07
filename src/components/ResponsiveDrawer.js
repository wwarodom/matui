import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import CenteredGrid from "./CenteredGrid";
import {PermIdentity,Toll, Today,
    AttachMoney,TouchApp, OpenInBrowser,
    DirectionsRun, Domain, InsertComment,
    Group,  Layers, } from '@material-ui/icons'
import { Link } from 'react-router-dom'


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
        menuIndex: 0
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };


    render() {
        const {classes, theme} = this.props;

        const kpiTopics = [
            {id: 1, topic: 'ด้านการเรียนรู้', icon: <OpenInBrowser /> },
            {id: 2, topic: 'บริการวิชาการ', icon: <InsertComment />},
            {id: 3, topic: '-'},
            {id: 4, topic: 'ด้านงานรับ', icon: <Toll />},
            {id: 5, topic: 'ด้านหลักสูตร', icon: <Today/>},
            {id: 6, topic: '-'},
            {id: 7, topic: 'บุคลากร', icon: <DirectionsRun />},
            {id: 8, topic: '-'},
            {id: 9, topic: 'สารสนเทศ', icon: <PermIdentity />},
            {id: 10, topic: 'ห่วงโซ่อุปทาน', icon: <Domain />},
            {id: 11, topic: '-'},
            {id: 12, topic: 'นำองค์การ', icon: <Group />},
            {id: 13, topic: 'นำไปปฏิบัติ', icon: <TouchApp />},
            {id: 14, topic: '-'},
            {id: 15, topic: 'การเงิน', icon: <AttachMoney />},
            {id: 16, topic: 'ครุภัณฑ์', icon: <AttachMoney />},
        ]

        const displayList = () => kpiTopics.map( (item, index) => {
            if ( item.topic == '-' )
                return (  <Divider key={index} /> )
            else
                return (
                    <ListItem key={index} button onClick={ () => {this.setState({menuIndex:index})} } >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.topic}/>
                    </ListItem>
                )
            }
        )

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <List>
                    { displayList()}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            EdPex PSU Phuket 2019
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>

                    <div className={classes.toolbar}/>

                    <CenteredGrid menuIndex={this.state.menuIndex} data={this.props.data} />


                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
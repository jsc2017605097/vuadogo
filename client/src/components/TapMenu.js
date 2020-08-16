import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs({ setShowPost, setShowCategories, setShowContact }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root} style={{marginBottom:'20px'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="POST" onClick={() => { setShowPost(true); setShowCategories(false); setShowContact(false) }} />
                <Tab label="CATEGORIES" onClick={() => { setShowPost(false); setShowCategories(true); setShowContact(false) }} />
                <Tab label="CONTACTS" onClick={() => { setShowPost(false); setShowCategories(false); setShowContact(true) }} />
            </Tabs>
        </Paper>
    );
}
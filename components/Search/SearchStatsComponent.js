import { Typography, List, ListItem, Divider, ListItemText } from "@material-ui/core";

export default (props) => (
    <React.Fragment>
        <Typography variant="h5" color="primary">Stats</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Days apart" secondary={props.daysApart} />
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemText primary="Leap year" secondary={props.leapYear ? "Yes" : "No"} />
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemText primary="No. of Mondays" secondary={props.numOfMondays} />
            </ListItem>
        </List>
    </React.Fragment>
);
import { Typography } from "@material-ui/core";
import DividerComponent from "../Global/DividerComponent";

export default ({date, note}) => (
    <div>
        <Typography variant="h5" color="primary">{date}</Typography>
        <DividerComponent />
        <Typography variant="h6" color="textPrimary">{note}</Typography>
    </div>
);
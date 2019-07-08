import { Paper } from "@material-ui/core";



export default function PaperContainerComponent(props) {
    return (
        <Paper 
            style={
                {
                    padding: "30px"
                }
        }>
            {props.children}
        </Paper>
    ); 
} 
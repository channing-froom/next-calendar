import { Grid } from "@material-ui/core";

export default props => (
    <div className="content-component"> 
        <Grid container spacing={3}>
            {props.children}
        </Grid>

        <style jsx>
            {`
              .content-component {
                margin-top: 40px
              }
              @media (max-width: 600px) {
                .content-component {
                  margin-top: 20px
                }
              }
            `}
          </style>
    </div>
);
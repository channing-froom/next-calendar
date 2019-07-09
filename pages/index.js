import { Container, Grid, Typography } from "@material-ui/core";
import PaperContainerComponent from "../components/PaperContainer/PaperContainerComponent";
import DividerComponent from "../components/Global/DividerComponent";
import SearchFormComponent from "../components/Search/SearchFormComponent";
import Head from 'next/head';
import ContentComponent from "../components/Global/ContentComponent";

export default function Index() {
    return (
        <Container maxWidth="sm">
          <Head>
            <title>Calendar App</title>
          </Head>
            <ContentComponent>
                <Grid item xs={12}>
                    <PaperContainerComponent>
                      <Typography variant="h4" color="primary" align="center">Calendar App</Typography>
                      <DividerComponent />

                      <SearchFormComponent />
                    </PaperContainerComponent>
                </Grid>
            </ContentComponent>
            

          <style jsx>
            {`
              .index--stage-container {
                margin-top: 40px
              }
              @media (max-width: 600px) {
                .index--stage-container {
                  margin-top: 20px
                }
              }
            `}
          </style>

        </Container>
    );
}
import { Component } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Typography } from "@material-ui/core";
import ContentComponent from "../components/Global/ContentComponent";
import SearchStatsComponent from "../components/Search/SearchStatsComponent";
import SearchListComponent from "../components/Search/SearchListComponent";
import Grid from '@material-ui/core/Grid';
import PaperContainerComponent from "../components/PaperContainer/PaperContainerComponent";
import DividerComponent from "../components/Global/DividerComponent";
import SearchFormComponent from "../components/Search/SearchFormComponent";
import SearchService from "../lib/services/SearchService";
import { ContactsOutlined } from "@material-ui/icons";
import { thisTypeAnnotation } from "@babel/types";



export default class Search extends Component {

    constructor(props)
    {
        super(props);

        this.state = props
    }

    componentDidMount() {
        if (!this.state) {
            this.setState({...this.props})
        }
    }

    getPageData = async (start, end) => {
        try {
            SearchService.ValidateDateRange(new Date(start), new Date(end))
        } catch (e) {
            // NEED proper error catching
            console.log(e);
        }

        const dateResponse = await SearchService.CollectDateItems(start, end);

        return dateResponse;
    }

    static async getInitialProps({query}) {
        try {
            SearchService.ValidateDateRange(new Date(query.start), new Date(query.end))
        } catch (e) {
            // NEED proper error catching
            console.log(e);
        }

        const dateResponse = await SearchService.CollectDateItems(query.start, query.end);
        const props = {...{transition:true}, ...query, ...dateResponse};

        return props;
    }

    render() {
        return (
            <Container maxWidth="md">
                <Head>
                    <title>Search page</title>
                </Head>

                <ContentComponent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <PaperContainerComponent>
                                <Typography variant="h5" color="primary">Search</Typography>
                                <SearchFormComponent 
                                    submitHook={
                                      async (a, b) => {
                                          this.setState({note: null, transition: false});
                                          const newData = await this.getPageData(a, b);
                                          this.setState({...newData, ...{transition: true}});
                                        }  
                                    } />
                                <SearchStatsComponent
                                    daysApart={this.state.daysApart}
                                    leapYear={this.state.hasLeapYear}
                                    numOfMondays={this.state.amountOfMondays}
                                />
                            </PaperContainerComponent>  
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <SearchListComponent notes={this.state.notes} transition={this.state.transition} />
                        </Grid>
                    </Grid>
                </ContentComponent>

            </Container>
        );
    }
}
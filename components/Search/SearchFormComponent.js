import { Component } from "react";
import DatePickerComponent from "../DatePicker/DatePickerComponent";
import {Search} from "@material-ui/icons";
import { Fab, Typography } from "@material-ui/core";
import DividerComponent from "../Global/DividerComponent";
import SearchService from "../../lib/services/SearchService";



export default class SearchFormComponent extends Component {

    constructor(props) {
        super(props);

        const date = new Date();
        date.toISOString();
        this.state = {
            start: new Date(),
            end: date.setDate(date.getDate() + 7),
            submitHook: null,
            error: null
        }
    }

    SubmitForm = () => {
        const {start, end} = this.state;

        if (this.props.submitHook) {
            this.props.submitHook(start, end);
        }

        try {
            SearchService.Search(new Date(start), new Date(end));
        } catch(e) {
            this.setState({error: e});
        }
    }

    SetStartDate = date => {
        this.setState({start: date})
    }

    SetEndDate = date => {
        this.setState({end: date})
    }

    // TODO move to component
    ApplyError = message => {
        return (
            <React.Fragment>
                <DividerComponent/>
                <Typography variant="h5" color="error" align="center">Error</Typography>
                <Typography variant="subtitle2" color="error" align="center">{message}</Typography>
            </React.Fragment>
        );
    }

    render(props)
    {
        return (
            <form className="search-form--form-container">
                <DatePickerComponent
                    label="Start date"
                    name="start-date"
                    id="start-date"
                    selectedDate={this.state.start}
                    onChange={this.SetStartDate}
                />
                <DatePickerComponent
                    label="End date"
                    name="end-date"
                    id="end-date"
                    selectedDate={this.state.end}
                    onChange={this.SetEndDate}
                />
                
                <div className="search-button">
                    <Fab color="primary" aria-label="Search" onClick={this.SubmitForm} >
                        <Search />
                    </Fab>
                </div>

                {this.state.error ? this.ApplyError(this.state.error) : "" }

                <style jsx>
                    {`
                        .search-form--form-container {
                            margin: 20px 0 20px 0;
                        }

                        .search-form--form-container .search-button {
                            margin-top: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    `}
                </style>
            </form>
        );
    }
}
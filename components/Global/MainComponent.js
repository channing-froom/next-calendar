import { Component } from "./node_modules/react";
import HeaderComponent from "./HeaderComponent";
import { Head } from "next/dist/pages/_document";
import FooterComponent from "./FooterComponent";
import { connect } from "./node_modules/react-redux";

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                {this.props.children}
                <FooterComponent />
            </div>
        );
    }
}

export default connect()(MainComponent);
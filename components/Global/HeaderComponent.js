import React, { Component } from './node_modules/react';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button';
import IconButton from './node_modules/@material-ui/core/IconButton';
import MenuIcon from './node_modules/@material-ui/icons/Menu';
import { Drawer } from './node_modules/@material-ui/core';
import { connect } from "./node_modules/react-redux";

class HeaderComponent extends Component {
    render () {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <Drawer open={false} >
                    <h2>Some sort of content</h2>
                </Drawer>
            </div>
        );
    }
}

export default connect()(HeaderComponent);
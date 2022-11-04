import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import SearchIcon from "@material-ui/icons/Search"
import style from "../Header/header.module.css"
const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={style.toolbar}>
                    <Typography variant='h5' className={style.title}>
                        Travel Advisor
                    </Typography>
                    <Box display="flex" >
                        <Typography variant="h6" className={style.title}>
                            Explore new places
                        </Typography>
                        <div className={style.search}>
                            <div>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='Search ...'></InputBase>
                        </div>
                    </Box>                        
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

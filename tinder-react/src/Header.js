import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'
function Header({ backButton }) {
    const history = useHistory()
    return (
        <div>
            <Nav>
                {backButton ? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize="large" className="header_icon"></ArrowBackIosIcon>
                    </IconButton>
                ) : (
                        <IconButton >
                            <PersonIcon fontSize="large" className="header_icon"></PersonIcon>
                        </IconButton>
                    )}

                <Link to='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEzBhhGpn_C5yRMh0KQFXFOKaI47Ldv311GmtgCxFTqsFDjnZ8--hhzO9B5QdcJqzDlY&usqp=CAU" alt="tinder logo" />
                </Link>
                <Link to='/chat'>
                    <IconButton>
                        <ForumIcon fontSize="large" className="header_icon"></ForumIcon>
                    </IconButton>
                </Link>

            </Nav>

        </div>
    )
}

const Nav = styled.div`
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    

    img{
        height:40px;
        object-fit:contain;
        display:flex;
        align-items:center;
    }
    .header_icon{
        padding:15px;
    }

`
export default Header

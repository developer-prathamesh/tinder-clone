import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButton">
            <IconButton className="repeat">
                <ReplayIcon fontSize='large'></ReplayIcon>
            </IconButton>
            <IconButton className="left">
                <CloseIcon fontSize='large'></CloseIcon>
            </IconButton>
            <IconButton className="star">
                <StarRateIcon fontSize='large'></StarRateIcon>
            </IconButton>
            <IconButton className="right">
                <FavoriteIcon fontSize='large'></FavoriteIcon>
            </IconButton>
            <IconButton className="lightning">
                <FlashOnIcon fontSize='large'></FlashOnIcon>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons

import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material'

const ReadMoreComponent = ({ children='' }) => {
    const text = children;

    return (
        <>
            { text.split(' ').length > 10 ?
                <Tooltip title={text} placement="top-start">
                   <Typography component={'span'} variant={'body2'}>{text.split(' ').slice(0,10).join(' ')+'...'}     </Typography>
                </Tooltip>
                :text
            }
        </>
    );
};

export default ReadMoreComponent;
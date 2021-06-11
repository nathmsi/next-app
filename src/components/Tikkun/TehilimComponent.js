import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import useWindowDimensions from '../../hooks/useWindowsDimention';
import { withNamespaces } from 'react-i18next';
import PresTikkun from './PreTikkun';
import PostTikkun from './PostTikkun';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    passouk: {

    },
    content: {
        height: props => props.height - 108,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto',
    }
}));



function TehilimComponent({
    content, t, selctedTehilim
}) {

    const { height } = useWindowDimensions();
    const classes = useStyles({ height });
    const contentRef = React.useRef(null);


    React.useEffect(() => {
        if (contentRef) {
            contentRef.current.scrollTo(0, 0);
        }
    }, [content])

    return (
        <div className={classes.content} ref={contentRef}>
            <div className={classes.root}>
                {selctedTehilim === 0 && <PresTikkun />}
                {
                    content.map(
                        (el, index) =>
                            <div key={index} className={classes.passouk}>
                                [{t(index + 1)}]
                                    <Typography align="right" variant="h4">
                                    {el}
                                </Typography>
                            </div>
                    )
                }
                {selctedTehilim === 9 && <PostTikkun />}
            </div>
        </div>
    );
}



export default withNamespaces()(TehilimComponent);

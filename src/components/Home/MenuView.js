import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Slide from '@material-ui/core/Slide';
import { useTranslation } from 'react-i18next';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        //width: 300,
        flexGrow: 1,
    },
    rootDialog: {
        // width: props => props.width * (9 / 10),
    },
    img: {
    },
    grow: {
        flexGrow: 1
    },
    titleView: {
        display: 'flex',
        alignItems: 'center'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',

    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    img: {
        height: 70,
        width: 100,
    },
}));


function MenuView({ menu, handleSubmit }) {

    const classes = useStyles();
    const { t } = useTranslation();
    //console.log(menu);

    return (
        <>
            <Card className={classes.root} onClick={() => handleSubmit(menu)}>
                <CardActionArea className={classes.content}>
                    <CardContent>
                        <Typography variant="h5" align="center" >
                            {t(menu)}
                        </Typography>
                    </CardContent>
                    {/* <CardMedia
                        component={"img"}
                        alt="Contemplative Reptile"
                        className={classes.img}
                        image={GetImage(menu)}
                        title="Contemplative Reptile"
                    /> */}
                </CardActionArea>
            </Card>
        </>
    );
}


export default (MenuView);


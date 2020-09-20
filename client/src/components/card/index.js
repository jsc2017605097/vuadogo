import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ product }) {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.img.toString()}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.describtion}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div style={{ display: "flex", padding: '10px', justifyContent: "space-around" }}>
                <Button size="small" color="secondary">
                    {new Intl.NumberFormat().format(product.price) + ' VNĐ'}
                </Button>
                <Button size="small" color="primary" onClick={() => {
                    dispatch({ type: "ADD_TO_CART", data: product })
                    dispatch({type:"ALERT_SUCCESS"})
                }}>
                    Mua hàng
                </Button>
            </div>
        </Card>
    );
}
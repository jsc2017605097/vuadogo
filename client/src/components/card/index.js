import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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

    return (
        <Link to={'/product/' + product._id}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.img[0].toString()}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <del>{new Intl.NumberFormat().format(product.price + (product.price * 0.1)) + ' VNĐ'}</del>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span style={{ fontWeight: "bold", color: "red" }}>{new Intl.NumberFormat().format(product.price) + ' VNĐ'}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>

    );
}
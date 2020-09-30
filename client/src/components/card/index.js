import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
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
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.img[0].toString()}
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
            <div style={{padding:"10px"}}>
                <Button size="small" color="secondary">
                    <span style={{fontWeight:"bold"}}>{new Intl.NumberFormat().format(product.price) + ' VNĐ'}</span>
                </Button>
                <Button variant="contained" color="secondary" style={{width:"100%"}}>Trả góp lãi suất 0%</Button>
            </div>
            <div style={{ display: "flex", padding: '10px', justifyContent: "center" }}>
                <Button style={{marginRight:"10px"}} variant="contained" size="small" color="primary">
                    <Link className='chitiet' to={'/product/'+product._id}>Chi tiết</Link>
                </Button>
                <Button size="small" variant="contained" color="secondary" onClick={() => {
                    dispatch({ type: "ADD_TO_CART", data: product })
                    dispatch({ type: "ALERT_SUCCESS" })
                }}>
                    Mua hàng
                </Button>
            </div>
        </Card>
    );
}
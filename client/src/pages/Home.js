import React from 'react'
import Grid from '@material-ui/core/Grid'
import Bg1 from '../images/bg1.jpg'
import Post from '../components/Post'
import Fillter from '../components/Fillter'

export default function Home() {
    return (
        <div>
            <Grid container >
                <Grid item xs={12} sm={12} lg={5} xl={5}>
                    <div
                        style={{
                            backgroundImage: `url(${Bg1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100vh'
                        }}>
                        Column1
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={7} xl={7} style={{ overflow: 'auto', background: '#F0F2F5' }}>
                    <div style={{ height: '100vh', padding: "20px" }}>
                        <Fillter />
                        <Post />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

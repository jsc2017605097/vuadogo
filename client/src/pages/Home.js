import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Bg1 from '../images/bg1.jpg'
import TabMenu from '../components/TapMenu'
import Post from '../components/Post'
import Contact from '../components/Contact'
import Fillter from '../components/Fillter'

export default function Home() {
    const [showPost, setShowPost] = useState(true)
    const [showContact, setShowContact] = useState(false)

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
                        <TabMenu setShowPost={setShowPost} setShowContact={setShowContact} />
                        {showPost && <Fillter />}
                        {showPost && <Post />}
                        {showContact && <Contact />}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

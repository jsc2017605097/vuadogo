import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Bg1 from '../images/bg1.jpg'
import TabMenu from '../components/TapMenu'
import Post from '../components/Post'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

export default function Home() {
    const [showPost, setShowPost] = useState(true)
    const [showCategories, setShowCategories] = useState(false)
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
                <Grid item xs={12} sm={12} lg={7} xl={7}>
                    <div style={{ height: '100vh', padding: "20px", background: '#F0F2F5' }}>
                        <TabMenu setShowCategories={setShowCategories} setShowPost={setShowPost} setShowContact={setShowContact} />
                        {showPost && <Post />}
                        {showCategories && <Categories />}
                        {showContact && <Contact />}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

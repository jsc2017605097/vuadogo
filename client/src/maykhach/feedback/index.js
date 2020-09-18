import React from 'react'
import Customer from './template'
import PeopleIcon from '@material-ui/icons/People';

export default function Feedback() {
    return (
        <div>
            <div style={{padding:"10px",display:"flex",alignItems:"center",justifyContent:"center"}} className="paper">
                <PeopleIcon />
                &nbsp;
                <span>Phản hồi của khách hàng</span>
            </div>
            <div style={{marginTop:"20px"}}>
                <Customer />
            </div>
        </div>
    )
}

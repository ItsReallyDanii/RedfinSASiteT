import React from 'react'
import "./topbar.css"
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { googleProvider } from '../../config/authMethods';
import socialMediaAuth from '../../services/auth';

const handleOnClick = async(provider) => {

    const res = await socialMediaAuth(provider);
    console.log(res);

}

export default function Topbar() {
    return (
        <div className = "topbar"> 
            <div className = "topbarWrapper">
                <div className = "topLeft">
                    <span className ="logo">Southside Team Dashboard</span>
                </div>
                <div className = "topRight">



                    <div className="topbarIconContiainer">
                        <HomeIcon/>
                        <span className="topIconBadge"></span> 
                    </div>

                    <div className="topbarIconContiainer">
                        <CalendarTodayIcon/>
                        <span className="topIconBadge"></span> 
                    </div>


                    <div className="topbarIconContiainer">
                        <NotificationsIcon/>
                        <span className="topIconBadge"></span> 
                    </div>


                    <div className="topbarIconContiainer">
                        <SettingsIcon/>
                        <span className="topIconBadge"></span> 
                    </div>

                    <div className="topbarIconContiainer">
                        <AccountBoxIcon onClick = {() => handleOnClick(googleProvider)}/>
                        <span className="topIconBadge"></span> 
                    </div>

                        <img src="https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg" alt="" className="topAvatar" />

                    
                </div>
            </div>
        </div>
    )
}

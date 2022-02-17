import "./sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from  '@material-ui/icons/CalendarToday';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TimelineIcon from '@material-ui/icons/Timeline';
import CommentIcon from '@material-ui/icons/Comment';
import LinkIcon from '@material-ui/icons/Link';
import HelpIcon from '@material-ui/icons/Help';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';
import ComputerIcon from '@material-ui/icons/Computer';
import { Link } from "react-router-dom";





export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className = "sidebarWrapper">

                <div className = "sidebarMenu">
                    <h3 className = "sidebarTitle">Dashboard</h3>
                    <ul className = "sidebarList">
                    <Link to = "/" style = {{color: "inherit", textDecoration: 'none'}}>
                        <li className = "sidebarListItem">

                            <HomeIcon className = "sidebarIcon"/>
                            Home

                        </li>
                        </Link>

                        <Link to = "/announcements" style = {{color: "inherit", textDecoration: 'none'}}>
                        <li className = "sidebarListItem">
                            <AnnouncementIcon  className = "sidebarIcon"/>
                            Annoucements
                        </li>
                        </Link>

                        <Link to = "/calendar" style = {{color: "inherit", textDecoration: 'none'}}>
                        <li className = "sidebarListItem">
                            <CalendarTodayIcon  className = "sidebarIcon"/>
                            Calender
                        </li>
                        </Link>
                    </ul>
                </div>


                <div className = "sidebarMenu">
                    <h3 className = "sidebarTitle">Performance</h3>
                    <ul className = "sidebarList">
                    <Link to = "/data" style = {{color: "inherit", textDecoration: 'none'}}>
                        <li className = "sidebarListItem">
                            <TimelineIcon className = "sidebarIcon"/>
                            Data
                        </li>
                        </Link>

                        <li className = "sidebarListItem">
                            <CommentIcon  className = "sidebarIcon"/>
                            Manager Feedback
                        </li>
                    </ul>
                </div>


                <div className = "sidebarMenu">
                    <h3 className = "sidebarTitle">Resources</h3>
                    <ul className = "sidebarList">
                    <Link to = "/finLinks" style = {{color: "inherit", textDecoration: 'none'}}>
                        <li className = "sidebarListItem">
                            <LinkIcon className = "sidebarIcon"/>
                            Fin Links
                        </li>
                    </Link>    

                        <li className = "sidebarListItem">
                            <HelpIcon  className = "sidebarIcon"/>
                            Q/A
                        </li>
                    </ul>
                </div>

                <div className = "sidebarMenu">
                    <h3 className = "sidebarTitle">Expenses</h3>
                    <ul className = "sidebarList">
                        <li className = "sidebarListItem">
                            <HomeIcon className = "sidebarIcon"/>
                            Expense Tracker
                        </li>
                    </ul>
                </div>

                <div className = "sidebarMenu">
                    <h3 className = "sidebarTitle">Staff</h3>
                    <ul className = "sidebarList">
                        <li className = "sidebarListItem">
                            <ComputerIcon className = "sidebarIcon"/>
                            Admin Dashboard
                        </li>

                        <li className = "sidebarListItem">
                            <AssessmentIcon  className = "sidebarIcon"/>
                            Reporting
                        </li>

                        <li className = "sidebarListItem">
                            <PeopleIcon  className = "sidebarIcon"/>
                            Meet the team
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

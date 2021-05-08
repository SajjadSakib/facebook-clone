
import SidebarRow from './SidebarRow'
import AddBoxIcon from '@material-ui/icons/AddBox';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './sidebar.css';

function Sidebar({user}) {
    return(
        <div className='Sidebar'>
        <SidebarRow title={user.displayName} src={user.photoURL}/>
        <SidebarRow title='Covid-19 Help Center' Icon={AddBoxIcon}/>
        <SidebarRow title='Pages' Icon={EmojiFlagsIcon}/>
        <SidebarRow title='Friends' Icon={PeopleOutlineIcon}/>
        <SidebarRow title='Messenger' Icon={TelegramIcon}/>
        <SidebarRow title='Marketplace' Icon={StorefrontIcon}/>
        <SidebarRow title='Videos' Icon={VideoLibraryIcon}/>
        <SidebarRow title='More' Icon={ExpandMoreIcon}/>
        </div>
)


}
export default Sidebar;
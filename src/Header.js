import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton,Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';


function Header(){
  return(
    <div className='header'>
      <div className='header_left'>
        <div>
          <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png'
              height='50px' alt='facebook'/>
        </div>
        <div className='SearchField'>
          <SearchIcon />
          <input className='Search' placeholder='Search in Facebook'/>
        </div>
      </div>
      <div className='header_middle'>
        <div className='header_item header_item--active' >
          <HomeIcon fontSize="large" />
        </div>
          <div className='header_item'>
              <FlagIcon fontSize="large" />
          </div>
        <div className='header_item'>
          <GroupIcon fontSize="large" />
        </div>
        <div className='header_item'>
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className='header_item'>
          <StorefrontIcon fontSize="large" />
        </div>
        
      </div>
      
      <div className='header_right'>
      
      <div className='header_button'>
      <IconButton>
       <Avatar />
      </IconButton>
      </div>
       <div className='header_button'>
      <IconButton>
       <AddIcon />
      </IconButton>
      </div>
      <div className='header_button'>
      <IconButton>
       
       <ForumIcon />
      </IconButton>
      </div>
      <div className='header_button'>
      <IconButton>
       <SettingsIcon />
       
      </IconButton>
      </div>
      
    </div>
    </div>
    
   )
}

export default Header;
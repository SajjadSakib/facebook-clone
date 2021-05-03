import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';


function Header(){
  return(
    <div className='header'>
      <div className='header_left'>
        <div>
          <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png'
              height='50px'/>
        </div>
        <div className='SearchField'>
          <input className='Search' placeholder='Search'/>
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
      left
      </div>
      
    </div>
    
   )
}

export default Header;
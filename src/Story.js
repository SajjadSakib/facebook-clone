import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({title,src,image}) {
    return(
        <div className='story' style={{background: `url(${image})`}} >
          <Avatar src={src} className='story_avatar'/>
          <h4>{title}</h4>
        </div>

    )
}
export default Story;
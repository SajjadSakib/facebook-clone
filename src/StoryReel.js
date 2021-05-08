import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return(
        <div className='storyReel'>
          <Story src={`${process.env.PUBLIC_URL}/Sajjad.jpeg`} title='Sajjad' image={`${process.env.PUBLIC_URL}/rsz_flower.jpg`}/>
          <Story src={`${process.env.PUBLIC_URL}/Sajjad.jpeg`} title='Sajjad' image={`${process.env.PUBLIC_URL}/rsz_flower.jpg`}/>
          <Story src={`${process.env.PUBLIC_URL}/Sajjad.jpeg`} title='Sajjad' image={`${process.env.PUBLIC_URL}/rsz_flower.jpg`}/>
          <Story src={`${process.env.PUBLIC_URL}/Sajjad.jpeg`} title='Sajjad' image={`${process.env.PUBLIC_URL}/rsz_flower.jpg`}/>
        </div>
    )
}
export default StoryReel;
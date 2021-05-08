import {Component} from 'react';
import StoryReel from "./StoryReel";
import UpdateStatus from './UpdateStatus';
import Post from './Post';
import {connect} from 'react-redux';
import db from './Firebase';
import './feed.css'

const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}

class Feed extends Component {
    constructor(){
    super()
    this.state={
        posts: []
    }
    }
    async componentDidMount (){
        setInterval(async()=>{
          const snapshot = await db.collection('posts').orderBy('timeStamp','desc').get();
        const posts = [];
        snapshot.forEach((doc) => {
          posts.push({id:doc.id, data: doc.data()})
        })
        this.setState({posts: posts});
        },1000)

        
    }
        
            
    
        
    
    

    render(){
        
        const {posts} = this.state
    return(
    <div className='feed'>
        <StoryReel />
        <UpdateStatus user={this.props.user}/>
        {posts.map(post=>(
            <Post 
            key={post.id}
            name={post.data.name}
            timeStamp={post.data.timeStamp}
            post={post.data.post}
            image={post.data.postImage}
            proPic={post.data.profilePicture}

      />

        ))}
        
        <Post name={'Sajjad'}
              timestamp='This is timestamp ...'
              post='Awesome work'
              image={`${process.env.PUBLIC_URL}/flower.jpg`}
        />
    </div>
    )}
}
export default connect(mapStateToProps)(Feed);
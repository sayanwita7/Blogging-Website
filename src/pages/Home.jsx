import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import authService from '../appwrite/auth.js'
import {Container, PostCard} from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if (user) {
        console.log("User is logged in:", user);
        appwriteService.getPosts().then((posts) => {
          if (posts) {
            setPosts(posts.documents);
          }
        });
      } else {
        console.log("No user session found.");
      }
    });
  }, []);


  if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-purple-100">
  <Container>
    <div className="flex flex-wrap justify-center items-center bg-purple-100 px-4">
      <div className="p-4 max-w-3xl mx-auto bg-white bg-opacity-70 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-4">
          Welcome to My Cozy Corner of the Internet ✨
        </h1>
        <p className="text-lg text-gray-800 mb-4">
          Hello lovely soul! 💜  
          This little space was lovingly created so *you* can share your stories, thoughts, and tiny moments that make life beautiful.
        </p>
        <p className="text-base text-gray-700 mb-4">
          Whether you're a daydreaming writer, a poetic soul, a curious traveler, or just someone who finds joy in words — this is your magical nook.
        </p>
        <ul className="text-left text-gray-800 font-medium mb-4 list-disc list-inside">
          <li> 📝 Express yourself freely — no filters needed </li>
          <li> 🌸 Connect with kind-hearted, like-minded creatives </li>
          <li> 📖 Share and read from a garden of stories </li>
          <li> 🌈 Get inspired, stay cozy, and come as you are </li>
        </ul>
        <p className="text-base text-gray-700 mb-4">
          This isn't just a blog — it’s a warm, whimsical space where thoughts bloom and words find their home.  
          So fluff your metaphorical pillows and start sharing. 💌
        </p>
        <p className="text-lg font-semibold text-purple-900">
          🌟 Your voice matters. Your story belongs here. 🌟
        </p>
      </div>
    </div>
  </Container>
</div>

        )
    }
    return (
        <div className='w-full py-8 bg-purple-100'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

}

export default Home

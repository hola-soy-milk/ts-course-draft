import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Post from './models/Post';
import { getPosts, postPost } from './utils/api';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    setPosts(await getPosts());
  }

  async function submitPost(post: Post) {
    await postPost(post);
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setPosts([{
      id: posts.length + 1,
      sender: {
        id: posts.length + 1,
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date,
    }]);
  }, []);

  return (
    <div className="App">
      <h1>Palabras Amables</h1>
      <main>
        <PostList posts={posts}/>
        <PostForm newPostId={posts.length + 1} submitPost={submitPost}/>
      </main>
    </div>
  );
}

export default App;

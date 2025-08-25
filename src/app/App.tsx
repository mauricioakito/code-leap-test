/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from "react";
import "./App.css";
import { ReadPosts } from "../services/api/ReadPosts";
import { Modal } from "../presentation/components/Modal";
import { useStore } from "../store/useStore";
import { Scroller } from "@/presentation/components/Scroller";

function App() {
  const { username, posts, setPosts, setHasRequestedPosts } = useStore();

  useEffect(() => {
    username && ReadPosts().then((response) => setPosts(response));
  }, [username, setPosts]);

  useEffect(() => {
    setHasRequestedPosts(true)
    posts.length > 0 && setPosts(posts)
  }, [posts, setPosts]);

  return <>{!username ? <Modal.Welcome /> : <Scroller />}</>;
}

export default App;

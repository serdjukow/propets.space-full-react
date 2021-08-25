import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/action/posts";
import { navContext } from "../App";
import HomeCard from "./HomeCard";

const Home = () => {
  const { isNav, setIsNav, isLostFound, setIsLostFound } =
    useContext(navContext);
  const posts = useSelector((state) => state.posts.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNav) {
      setIsNav(true);
    }
    if (isLostFound) {
      setIsLostFound(false);
    }
    dispatch(getPosts());
  }, []);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [posts.length]);

  const renderPosts = () => {
    return posts.length ? (
      posts.map((post) => (
        <HomeCard key={post.id} post={post} />
      ))
    ) : (
      <h2>No posts</h2>
    );
  };

  return (
    <div className="home-page__container home-content">
      <div className="home-page__row">{renderPosts()}</div>
    </div>
  );
};
export default Home;

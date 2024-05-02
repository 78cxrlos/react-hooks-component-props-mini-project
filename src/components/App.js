import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Aside from "./About";
import Main from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <Aside image = {blogData.image}/>
      <Main post = {blogData.posts}/>
    </div>
  );
}

export default App;

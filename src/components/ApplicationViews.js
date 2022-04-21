import React from "react"
import { Route } from "react-router-dom"
import { CategoryManagement } from "./Categories/CategoryManagement"
import { PostList } from "./Posts/PostList"
import { Post } from "./Posts/Posts"
import { get_all_posts } from "./Posts/PostsManager"
export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>

      <Route exact path="/posts" >
        <PostList />
      </Route>

      <Route exact path="/posts/:postId(\d+)" >
        <Post />
      </Route>

      <Route exact path="/categories" >
        <CategoryManagement />
      </Route>

      
    </>
  )
}

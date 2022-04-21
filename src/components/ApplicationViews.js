import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./Posts/PostList"
import { get_all_posts } from "./Posts/PostsManager"
export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>

      <Route exact path="/posts" >
        <PostList />
      </Route>
      
    </>
  )
}

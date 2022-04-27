import React from "react"
import { Route } from "react-router-dom"
import { CategoryManagement } from "./Categories/CategoryManagement"
import { PostList } from "./Posts/PostList"
import { Post } from "./Posts/Posts"
import { UserPostsList } from "./Posts/UserPosts"
import { TagList } from "./Tags/TagList"
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

      <Route exact path="/my-posts">
        <UserPostsList />
      </Route>

      <Route exact path="/categories" >
        <CategoryManagement />
      </Route>

      <Route exact path="/tags" >
        <TagList />
      </Route>


    </>
  )
}

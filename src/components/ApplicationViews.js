import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./Categories/CategoryList"
import { CategoryForm } from "./Categories/CategoryForm"
import { PostList } from "./Posts/PostList"
import { Post } from "./Posts/Posts"
import { get_all_posts } from "./Posts/PostsManager"
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

      <Route exact path="/categories" >
        <CategoryList />
      </Route>

      <Route exact path="/tags" >
        <TagList />
      </Route>

      
    </>
  )
}

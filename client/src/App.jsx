import React from "react"
import { Route, Routes } from "react-router";
import UserLayout from "./pages/user/UserLayout";
import Home from "./pages/user/Home";
import Blog from "./pages/user/Blog";
import Search from "./pages/user/Search";
import BlogDetail from "./pages/user/BlogDetail";
import Auth from "./pages/admin/Auth";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminComment from "./pages/admin/AdminComment";
import CreatePizzaBlogForm from "./components/admin/blog/CreatePizzaBlogForm";
import ViewPizzaBlogForm from "./components/admin/blog/ViewPizzaBlogForm";
import RecentBlogTable from "./components/admin/blog/RecentBlogTable";
import { RefreshToken } from "./hooks/Protected";

const App = () => {

  return(
    <>
      <Routes>
        <Route path='/' element={<UserLayout/>} >
          <Route index  element={<Home/>}/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/auth/login" element={<Auth/>} />
        </Route>
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index path="/admin" element={<AdminDashboard/>} />
              <Route path="/admin/blog" element={<AdminBlog/>}>
                  <Route path="/admin/blog" element={<RecentBlogTable/>} />
                  <Route path="/admin/blog/add" element={<CreatePizzaBlogForm/>} />
                  <Route path="/admin/blog/update/:id" element={<CreatePizzaBlogForm/>} />
                  <Route path="/admin/blog/action" element={<ViewPizzaBlogForm/>} />
              </Route>
              <Route path="/admin/comment" element={<AdminComment/>} />
            </Route>        
      </Routes>
    </>
  )
}

export default App;
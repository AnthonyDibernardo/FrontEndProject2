import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './css/header.css'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Blog from './Blog.jsx'
import Login from './Login.jsx'
import BlogPost from './blogComponents/post.jsx'
import { useUser } from "./Provider.jsx";

function Header(){
    const { user, toggleTheme } = useUser();

    return (
        <header>
            <h1>Team 3's Blog</h1>
            <button type="button" onClick={toggleTheme}>Toggle Theme</button>
            <BrowserRouter>
                <nav>
                    <Link className="pageNav" to="/">Home</Link>
                    <Link className="pageNav" to="/blog">Blog</Link>
                    <Link className="pageNav" to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
            </BrowserRouter>
        </header>
    );
}

export default Header;

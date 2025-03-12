import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Logout from "./pages/Logout";
import AdminLayout from "./components/admin/layout/Admin-Layout";
import AdminUsers from "./pages/admin/Admin-Users";
import AdminContacts from "./pages/admin/Admin-Contacts";
import AdminUpdate from "./pages/admin/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin/updates/:id" element={<AdminUpdate />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;

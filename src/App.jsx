import { NavLink, useNavigate, useMatch, useParams, Outlet } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorie/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

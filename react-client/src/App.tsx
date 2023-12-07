import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Home from "./pages/Home";
import { AdminPanel } from "./pages/AdminPanel";

export default function App() {

  const userState = {
    userId: 0
  }

  const HomepageLayout = () => {
    return (
      <div>
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>

        {userState.userId === 0
        ?
          <Route path="/" element={<HomepageLayout />}>
            <Route index element={<Home />} />
            <Route path="admin" element={<AdminPanel />} />
          </Route>
        :
          <>
            <Route path="/" element={<Navigate to="/menu" />} />
            <Route path="login" element={<Navigate to="/menu" />} />
            <Route path="register" element={<Navigate to="/menu" />} />
          </>
        }

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}
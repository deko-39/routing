import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
// import your route components too

const Home = () => {
  return <>Home</>;
};

const Teams = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate("/home", { replace: true }); // Mỗi path sẽ tương ứng với 1 component
  }

  return (
    <>
      <div> Teams</div>
      <button type="button" onClick={handleClick}>
        Back to home
      </button>
      <Outlet />
    </>
  );
};

const Member = () => {
  return (
    <>
      <div> Member</div>
      <Outlet />
    </>
  );
};
const Member1 = () => {
  return <>Member1</>;
};
const Member2 = () => {
  return <>Member2</>;
};
const Member3 = () => {
  return <>Member3</>;
};

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
    </ul>
  );
};

const Header2 = () => {
  return (
    <ul>
      <li onClick={() => window.location.assign("/home")}>Home</li>
      <li onClick={() => window.location.assign("/teams")}>Teams</li>
    </ul>
  );
};

const a = 1;
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Header2 /> */}
        <Routes>
          {/* Element === Component */}
          <Route path="/home" element={<Home />} />
          <Route path="/teams">
            <Route path="member" element={<Member />} />
            <Route path="member1" element={<Member1 />} />
            <Route path="member2" element={<Member2 />} />
            <Route path="member3" element={<Member3 />} />
            <Route path="" element={<Teams />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

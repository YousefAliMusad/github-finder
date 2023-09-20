import Home from "./components/Home";


import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route,
    ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import RepoDetalis from "./components/RepoDetalis";

const Layout = () => {
  return (
    <div>
        <Header />

        <Outlet/>

    </div>
  );
};

const router = createBrowserRouter(
    createRoutesFromElements([

    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="repos/:reponame" element={<RepoDetalis />} />
    </Route>


    ])
);


function App() {
    return (
        <>
        <div className="font-bodyFont">
            <RouterProvider router={router} />
        </div>
        </>
    );
}

export default App;
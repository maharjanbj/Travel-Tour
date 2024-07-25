import React from "react";

import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Details from "../pages/Details";
// import Bloglist from "../components/modules/Landing/Bloglist";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/movie/:id", element: <Details /> },
  // { path: "/blog", element: <Bloglist /> }
];

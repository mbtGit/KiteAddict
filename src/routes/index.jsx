import Components from "views/Components/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/guests", name: "Geusts", component: Components },
  { path: "/professors", name: "Professors", component: Components },
  { path: "/services", name: "Services", component: Components },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;

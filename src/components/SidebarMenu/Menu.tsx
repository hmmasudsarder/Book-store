import { RxDashboard } from "react-icons/rx";

// import { FiUsers } from "react-icons/fi";
// import { IoColorFillSharp } from "react-icons/io5";
import { Home, ShoppingBagIcon } from "lucide-react";
// import { SettingsIcon, ShoppingBagIcon } from "lucide-react";
export const menuData = {
  menu: [
      {
          name: "Dashboard",
          icon: RxDashboard,
          path: "/dashboard",
          subItems: [],
      },
      {
          name: "Users",
          icon: ShoppingBagIcon,
          path: "userHome",
          subItems: [
              { name: "All Users", path: "allUser" },
              { name: "Get ALL Products", path: "getAllProductByAdmin" },
          ],
      },
      {
          name: "Profiles",
          icon: ShoppingBagIcon,
          path: "profile",
          // subItems: [
          //     { name: "Books", path: "/shop/books" },
          //     { name: "Magazines", path: "/shop/magazines" },
          // ],
      },
      {
          name: "Settings",
          icon: ShoppingBagIcon,
          path: "adminHome",
          subItems: [
              { name: "Books", path: "/shop/books" },
              { name: "Get ALL Products", path: "getAllProductByAdmin" },
          ],
      },
      {
          name: "Back To Home",
          icon: Home,
          path: "/",
          // subItems: [
          //     // { name: "Books", path: "/shop/books" },
          //     { name: "Get ALL Products", path: "getAllProductByAdmin" },
          // ],
      },
  ],
  // profileLinks: [
  //     {
  //         name: "Profile",
  //         path: "/profile",
  //         icon: FiUsers,
  //     },
  //     {
  //         name: "Settings",
  //         path: "/settings",
  //         icon: SettingsIcon,
  //     },
  // ],
};

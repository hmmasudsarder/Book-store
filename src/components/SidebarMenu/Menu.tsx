import { RxDashboard } from "react-icons/rx";

import { FiUsers } from "react-icons/fi";
// import { IoColorFillSharp } from "react-icons/io5";
import { SettingsIcon, ShoppingBagIcon } from "lucide-react";
export const menuData = {
  menu: [
      {
          name: "Dashboard",
          icon: RxDashboard,
          path: "/dashboard",
          subItems: [],
      },
      {
          name: "Shop",
          icon: ShoppingBagIcon,
          path: "/userHome",
          subItems: [
              { name: "Books", path: "/shop/books" },
              { name: "Magazines", path: "/shop/magazines" },
          ],
      },
      {
          name: "Profiles",
          icon: ShoppingBagIcon,
          path: "/shop",
          // subItems: [
          //     { name: "Books", path: "/shop/books" },
          //     { name: "Magazines", path: "/shop/magazines" },
          // ],
      },
      {
          name: "Settings",
          icon: ShoppingBagIcon,
          path: "/shop",
          subItems: [
              { name: "Books", path: "/shop/books" },
              { name: "Magazines", path: "/shop/magazines" },
          ],
      },
  ],
  profileLinks: [
      {
          name: "Profile",
          path: "/profile",
          icon: FiUsers,
      },
      {
          name: "Settings",
          path: "/settings",
          icon: SettingsIcon,
      },
  ],
};

import React, { useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { LuFolderGit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps {
  id: string | number;
  isOpen: boolean;
  toggleDropdown: (id?: string | number) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDetails?: () => void;
  editTitle?: string;
  deleteTitle?: string;
  detailsTitle?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  isOpen,
  toggleDropdown,
  onEdit,
  onDelete,
  onDetails,
  editTitle,
  deleteTitle,
  detailsTitle,
}) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    if (isOpen) {
      toggleDropdown();
    }
  });
  const handleEdit = () => {
    toggleDropdown(id);
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    toggleDropdown(id);
    if (onDelete) {
      onDelete();
    }
  };

  const handleDetails = () => {
    toggleDropdown(id);
    if (onDetails) {
      onDetails();
    }
  };

  const popoverVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div ref={dropdownRef} className="relative">
      <label
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => toggleDropdown(id)}
      >
        <HiOutlineDotsHorizontal />
      </label>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popoverVariants}
            className="dropdown-content z-50 menu p-4 shadow-lg bg-white rounded-box w-52 absolute top-full -left-[220px] -mt-[80px] rounded-lg border-2 border-primary/10 flex flex-col gap-3 font-poppins"
          >
            {onEdit && (
              <li>
                {typeof onEdit === "string" ? (
                  <Link to={onEdit} className="flex items-center gap-3">
                    <LuFolderGit />
                    <span>{editTitle ? editTitle : "Edit"}</span>
                  </Link>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-3 w-full"
                  >
                    <LuFolderGit />
                    <span>{editTitle ? editTitle : "Edit"}</span>
                  </button>
                )}
              </li>
            )}
            {onDelete && (
              <li>
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-3 w-full"
                >
                  <RiDeleteBinLine />
                  <span>{deleteTitle ? deleteTitle : "Delete"}</span>
                </button>
              </li>
            )}
            {onDetails && (
              <li>
                {typeof onDetails === "string" ? (
                  <Link to={onDetails} className="flex items-center gap-3">
                    <CgDetailsMore />
                    <span>{detailsTitle ? detailsTitle : "Details"}</span>
                  </Link>
                ) : (
                  <button
                    onClick={handleDetails}
                    className="flex items-center gap-3 w-full"
                  >
                    <CgDetailsMore />
                    <span>{detailsTitle ? detailsTitle : "Details"}</span>
                  </button>
                )}
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;

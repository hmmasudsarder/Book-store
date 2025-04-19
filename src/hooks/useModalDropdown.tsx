/* eslint-disable @typescript-eslint/no-explicit-any */
// useModalDropdown.js
import { useState } from "react";

// Define the SelectedItemData type
type SelectedItemData = {
  id: string;
  name: string;
  [key: string]: any; // Adjust fields as per your requirements
};

const useModalDropdown = () => {
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedItemData, setSelectedItemData] = useState<SelectedItemData | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleDropdown = (id: any) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const openAddModal = () => setAddModalOpen(true);
  const openModal = (item: SelectedItemData | null) => {
    setIsOpenModal(true);
    setSelectedItemData(item);
  };
  const openEditModal = (item: SelectedItemData) => {
    setSelectedUserId(item?.id);
    setEditModalOpen(true);
    setSelectedItemData(item);
  };
  const openDeleteModal = (item: SelectedItemData) => {
    setSelectedUserId(item.id);
    setSelectedItemData(item);
    setDeleteModalOpen(true);
  };
  const openDetailsModal = (item: SelectedItemData) => {
    setSelectedUserId(item?.id);
    setDetailsModalOpen(true);
    setSelectedItemData(item);
  };
  const closeModals = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setDetailsModalOpen(false);
    setIsOpenModal(false);
  };

  return {
    dropdownOpenId,
    selectedUserId,
    selectedItemData,
    isAddModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    isDetailsModalOpen,
    toggleDropdown,
    openAddModal,
    openEditModal,
    openDeleteModal,
    openDetailsModal,
    closeModals,
    openModal,
    isOpenModal,
  };
};

export default useModalDropdown;

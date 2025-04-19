// import { AiOutlinePlus } from "react-icons/ai";
import useModalDropdown from "../../../../hooks/useModalDropdown";
import ActionModal from "../../../../share/ActionModal/ActionModal";
import Breadcrumb from "../../../../share/Breadcrumb/Breadcrumb";
// import Heading from "../../share/ui/Heading/Heading";
// import Paragraph from "../../share/ui/Paragraph/Paragraph";
import { useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import DropdownMenu from "../../../../share/DropdownMenu/DropdownMenu";
import Table from "../../../../share/Table/Table";
import { usersData } from "../../../../share/Data/Data";
import usePageAnimation from "../../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container";
import AreaCharts from "../../../../share/Charts/AreaChart/AreaChart";
import BarCharts from "../../../../share/Charts/BarChart/BarCharts";

const Dashboards = () => {
  const { parentVariant, childVariant } = usePageAnimation();
  const [loading, setLoading] = useState(false);
  
  const {
    dropdownOpenId,
    selectedUserId,
    isDetailsModalOpen,
    toggleDropdown,
    openDetailsModal,
    closeModals,
  } = useModalDropdown();
  const dropdownRef = useRef(null);

  useClickOutside({ ref: dropdownRef, callback: () => toggleDropdown(null) });

  const header = [
    { header: "Sl", accessorKey: "id" },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }: { row: { original: { image: string } } }) => (
        <img
          src={row.original.image}
          alt=""
          className="w-12 h-12 rounded-full"
        />
      ),
    },
    { header: "Name", accessorKey: "username" },
    { header: "Category", accessorKey: "category" },
    { header: "Gender", accessorKey: "gender" },
    {
      header: "Action",
      id: "action",
      cell: ({ row }: { row: { original: { id: string; image: string; username: string } } }) =>{
        const { id } = row.original;
        const isOpen = dropdownOpenId === id;

        return (
          <DropdownMenu
            id={id}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            onEdit={() => {}}
            onDelete={() => {}}
            onDetails={() => openDetailsModal({ id, name: row.original.username })}
          />
        );
      },
    },
  ];

  const [pagination, setPaginationState] = useState({ pageSize: 10, pageIndex: 0 });
  const [totalData, setTotalData] = useState(usersData.length);
  const [search, setSearch] = useState("");
  console.log(setLoading, setTotalData, setSearch);

  function setPagination(pagination: { pageSize: number; pageIndex: number }): void {
    setPaginationState(pagination);
  }

  return (
    <Container>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="font-poppins"
      >
        <motion.div variants={childVariant}>
          <Breadcrumb title="Dashboard" />
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* Weekly Sales */}
          <motion.div
            variants={childVariant}
            className="p-5 rounded-lg bg-primary cursor-pointer "
          >
            <div className="text-center">
              <h2 className="font-medium text-[20px] text-white">Icome</h2>
              <p className="font-normal text-secondary">5000</p>
              <p className="font-normal text-white">
                Increase by <span className="text-secondary">30%</span>
              </p>
            </div>
          </motion.div>

          {/* Monthly Sales */}
          <motion.div
            variants={childVariant}
            className="p-5 rounded-lg bg-orange-400  cursor-pointer "
          >
            <div className="text-center">
              <h2 className="font-medium text-[20px] text-white">Expense</h2>
              <p className="font-normal text-primary">500</p>
              <p className="font-normal text-white">
                Increase by <span className="text-primary">20%</span>
              </p>
            </div>
          </motion.div>

          {/* Yearly Sales */}
          <motion.div
            variants={childVariant}
            className="p-5 rounded-lg bg-green-400 cursor-pointer "
          >
            <div className="text-center">
              <h2 className="font-medium text-[20px] text-white">Revenue</h2>
              <p className="font-normal text-primary">7000</p>
              <p className="font-normal text-white">
                Increase by <span className="text-primary">40%</span>
              </p>
            </div>
          </motion.div>

          {/* Area Chart */}
          <motion.div
            variants={childVariant}
            className="bg-white p-5 rounded-lg row-span-6 "
          >
            <AreaCharts />
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            variants={childVariant}
            className="bg-white p-5 rounded-lg row-span-6 "
          >
            <BarCharts />
          </motion.div>
          {/* Area Chart */}
          <motion.div
            variants={childVariant}
            className="bg-white p-5 rounded-lg row-span-6 "
          >
            <AreaCharts />
          </motion.div>
        </div>
        <Table
          columns={header}
          tabelData={usersData}
          pagination={pagination}
          setPagination={setPagination}
          totalData={totalData}
          loading={loading}
          search={search}
          setSearch={setSearch}
        />
      </motion.div>
      <ActionModal
        isOpen={isDetailsModalOpen}
        closeModal={closeModals}
        title="User Details"
        actionContent={
          <div className="p-5">User Details Information {selectedUserId}</div>
        }
      />
    </Container>
  );
};

export default Dashboards;

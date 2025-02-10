/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { useBlockUserMutation, useGetAllUsersQuery } from "../../../../redux/features/admin/userManagement.api";

const AllUsers = () => {
    const { data, error, isLoading } = useGetAllUsersQuery(undefined);
    const [blockUser] = useBlockUserMutation()
    const users = data?.data || [];
    console.log(users);


    //  handler block
    const handleBlockUser = async (userId: string) => {
        try {
            console.log("Blocking user with ID:", userId);
            const res = await blockUser({ userId }).unwrap();
            toast.success(`${res.message}`);
        } catch (err: any) {
            toast.error(err.data.message)
        }
    }

    return (
        <div>
            <h1 className="text-3xl p-4 text-center">All User Management</h1>

            <div className="text-gray-900 bg-gray-200 px-3 py-4 flex justify-center">
                {isLoading ? (
                    <p className="text-xl">Loading users...</p>
                ) : error ? (
                    <p className="text-xl text-red-500">Failed to load users</p>
                ) : users && users.length > 0 ? (
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="border-b bg-gray-300">
                                <th className="text-left p-3 px-5">Name</th>
                                <th className="text-left p-3 px-5">Email</th>
                                <th className="text-left p-3 px-5">Role</th>
                                <th className="p-3 px-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: any) => (
                                <tr key={user._id} className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5">{user.name}</td>
                                    <td className="p-3 px-5">{user.email}</td>
                                    <td className="p-3 px-5">{user.role}</td>
                                    <td className="p-3 px-5 flex justify-end gap-2">

                                        <button
                                            onClick={() => handleBlockUser(user._id)}
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none"
                                        >
                                            Block
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-xl text-gray-600">No users found.</p>
                )}
            </div>
        </div>
    );
};

export default AllUsers;

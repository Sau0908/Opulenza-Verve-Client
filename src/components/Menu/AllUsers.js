import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import HeaderForRoute from "../shared/HeaderForRoute";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://restaurant-server-chi.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.username} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://restaurant-server-chi.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <HeaderForRoute></HeaderForRoute>
            <div className="min-h-[580px] bg-hero bg-cover bg-right">
                <div className="max-w-screen-md mx-auto py-28">
                    <h3 className="text-3xl text-white font-semibold my-4">Total Users: {users.length}</h3>
                    <div className="overflow-x-auto bg-black bg-opacity-40 text-white">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr className="text-white text-base">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Admin Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 border-none text-white"><FaUserShield></FaUserShield></button>
                                        }</td>
                                        <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 border-none text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
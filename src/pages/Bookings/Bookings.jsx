import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setLoading(false)
            })
    }, [])

    const handleDelete = id => {
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
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(book => book._id !== id)
                            setBookings(remaining)
                        }
                    })
            }
        })
    }


    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(book => book._id !== id)
                    const updated = bookings.find(book => book._id === id)
                    updated.status = 'confirm'
                    const newbookings = [updated, ...remaining]
                    setBookings(newbookings)
                }
            })
    }

    return (
        <div className='min-h-[70vh] container'>
            <h2 className='text-4xl py-6 text-center'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody className='w-full'>

                        {
                            bookings.map(book =>
                                <tr key={book._id}>
                                    <th>
                                        <button onClick={() => handleDelete(book._id)} className="btn btn-circle btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask w-24">
                                                <img src={book.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {book.service_title}
                                    </td>
                                    <td>
                                        {book.date}
                                    </td>
                                    <td className='text-center'>${book.price}</td>
                                    <th className='text-end'>
                                        {
                                            book.status === 'confirm' ?
                                                <span className='text-green-700'>Confirmed</span> :
                                                <button onClick={() => handleConfirm(book._id)} className="btn btn-ghost btn-xs">Confirm</button>
                                        }
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div >
    );
};

export default Bookings;
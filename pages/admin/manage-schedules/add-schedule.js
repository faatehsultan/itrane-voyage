import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'

const detailData = [
  ["ID", "id"],
  ["Pickup", "src"],
  ["Destination", "dest"],
  ["Start Time", "start_time"],
  ["End Time", "end_time"],
  ["Start Station", "start_station"],
  ["End Station", "end_station"],
  ["Price", "price"],
  ["Date", "dept_date"],
  ["No. of Seats", "no_of_seats"],
]

export default function TrackBookings() {
  const [schedule, setSchedule] = useState([])

  return (
    <AdminLayout isForAdmin>
      <div className="container-fluid mt-4">
        <div className="fs-2 text-center text-danger fw-bold">Manage Schedules/Add New</div>
        <br />
        {/* form to add */}
        <form className='row'>
          <div className="form-group col-12 col-md-6">
            <label htmlFor="exampleInputEmail1">Pickup</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Pickup" />
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

import { queryDB } from './db'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    {
      let body = JSON.parse(req.body)
      let user = body.userInfoObj;
      let seats = body.selectedSeats;
      let schedule_id = body.schedule_id;

      let qRes1 = await queryDB(
        `INSERT INTO bookings (schedule_id, name, email, address_1, address_2, city, state, zip, country, phone, deliver_info, payment_mode) VALUES (${schedule_id},'${user.name}','${user.email}','${user.address1}','${user.address2}','${user.city}','${user.state}','${user.zip}','${user.country}','${user.phone}','${user.deliveryInfo}', '${body.paymentMode}');`
      );

      if (qRes1 && qRes1.insertId) {
        for (let i = 0; i < seats.length; i++) {
          let qRes2 = await queryDB(`INSERT INTO booking_seats(seat_no, booking_id) VALUES (${seats[i]}, ${qRes1.insertId});`);
        }
        res.status(200).json("success");
        return;
      } else {
        res.status(500).json("error occurred")
        return;
      }
    }
  }
}

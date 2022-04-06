import { queryDB } from './db'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    {
      console.log(req.body)

      // let qResAll = await queryDB(`SELECT * FROM seats_schedule where schedule_id = ${schedule_id};`);

      res.status(200).json("asdsad")
    }
  }
}

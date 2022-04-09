import React from 'react'
import TicketTrip from 'components/ticket/ticketTrip'

const Ticket = ({ ticketList }) => {
	return (
		<div >
			<div className=" flex items-center justify-center flex-col py-10 my-12 flex-wrap  space-y-16 w-screen">
				{ticketList.map((ticket) => (
					<div className="w-full " key={ticket.id}><TicketTrip ticketDetails={ticket} /></div>
				))}
			</div>

		</div>
	)
}

export default Ticket
import React from 'react'
import TicketTrip from 'components/ticket/ticketTrip'

const Ticket = ({ ticketList }) => {
	return (
		<div >
			<div className=" flex items-center justify-center flex-col py-10 my-12 flex-wrap bg-re space-y-16 h-auto w-full">
				{ticketList.map((ticket) => (
					<div className="item w-full px-10 h-full" key={ticket.id}><TicketTrip ticketDetails={ticket} /></div>
				))}
			</div>

		</div>
	)
}

export default Ticket
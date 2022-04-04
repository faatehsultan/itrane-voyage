import React from 'react'
import Ticketbox from 'components/ticket/ticketbox'

const Ticket = ({ ticketList }) => {
	return (
		<div >
			<div className=" flex items-center justify-center flex-col py-24 my-12 flex-wrap bg-re space-y-16 h-auto w-full">
				{ticketList.map((ticket) => (
					<div className="item w-auto h-full" key={ticket.id}><Ticketbox ticketDetails={ticket} /></div>
				))}
			</div>

		</div>
	)
}

export default Ticket
import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b m"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-white">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Faqs = () => {

    const faqsList = [
        {
            q: "How Can I Pay?",
            a: " You can pay using multiple options like debit card, credit card, wallets, net-banking and even pay in person in one of our agencies."
        },
        {
            q: "Do I have to Register to Buy a Ticket",
            a: "Itrane Voyage offers a unique flexibility in user registration. It is not required to register to buy tickets online. However, frequent passengers are encouraged to register with Itrane Voyage to benefit from Itrane Voyage like Itrane reward point etc."
        },
        {
            q: "Is it safe to buy a ticket on ItraneVoyage.com?",
            a: "Safety of the buying process is something we take very seriously; the merchants we work with for the processing of payments are experienced and known for their high security standards."
        },
        {
            q: "I've lost my ticket. What should I do now?",
            a: "A copy of the ticket would have been sent to you by e-mail when you booked it. Please take a printout of that mail and produce it at the time of boarding. If you have not received the ticket e-mail, please call any of our call centers and our executive will re-send you a copy by mail."
        },
        {
            q: "Can I cancel my ticket online?",
            a: "Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our call center. However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="font-semibold pb-8 sm:text-5xl text-center title-font text-transparent bg-clip-text bg-gradient-to-br from-white to-white">
                    Frequently Asked Questions
                </h1>
                <p className="text-white max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faqs


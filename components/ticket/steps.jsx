import React, { useState } from "react"

import ChevronDots from "components/ticket/stepsmethod"

function Steps() {
  const [currentStep, setCurrentStep] = useState(3)
  return (
    <div className="pt-12">
      <div className="w-1/2 mx-auto">
        <ChevronDots
          steps={["Search", "Trip", "Seat", "Payment"]}
          currentStep={currentStep}
          onStepClick={step => setCurrentStep(step)}
        />
      </div>
    </div>
  )
}

export default Steps
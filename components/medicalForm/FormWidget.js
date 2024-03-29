const FormWidget = ({
  formValues,
  setFormStart,
  setFormStep,
  setFormValues,
  prevFormStep,
  currStep,
}) => {

  // console.log("formValues", formValues)
  const handleReset = () => {
    setFormStart(false)
    setFormStep(0)
    setFormValues(null)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleBack = () => {
    prevFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg dark:bg-stone-800">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Form Status</h3>
      {formValues?.[0]?.patientInfo.sex === "female" && currStep + 1 < 8 ? (
        <p
        className="mb-4 w-full transform cursor-pointer transition-colors duration-150 
        dark:text-gray-100"
      >
        Working on{' '}
        <span className="animate-pulse text-blue-500 hover:animate-none hover:text-blue-600 ">
          Section {currStep + 1}{' '}
        </span>
        of {formValues[0]?.patientInfo.sex === "female" ? 7 : 6}
      </p>
      ) : currStep + 1 < 7 ? (
        <p
        className="mb-4 w-full transform cursor-pointer transition-colors duration-150 
        dark:text-gray-100"
      >
        Working on{' '}
        <span className="animate-pulse text-blue-500 hover:animate-none hover:text-blue-600 ">
          Section {currStep + 1}{' '}
        </span>
        of {formValues?.[0]?.patientInfo.sex === "female" ? 7 : 6}
      </p>
      ) : (
        null
      )}
      
      {currStep > 0 && (
        <button className="widgets" onClick={handleBack}>
          Go Back
        </button>
      )}
      <button className="widgets" onClick={handleReset}>
        Cancel/Reset
      </button>
    </div>
  )
}

export default FormWidget

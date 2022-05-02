const Curve = ({ theme }) => {
  return (
    <div className="hidden w-screen overflow-hidden before:absolute md:-mt-36 md:flex">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="w-screen overflow-hidden"
          fill={theme === "dark" ? "#000000" : "#ffffff"}
          fillOpacity="1"

        ></path>
      </svg>
    </div>
  )
}

export default Curve

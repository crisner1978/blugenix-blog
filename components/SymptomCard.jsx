import FreeButton from './FreeButton'

const SymptomCard = ({ setOpen, item }) => {
  return (
    <div className='pt-10 pb-8 lg:pt-0 relative lg:h-[500px]'>
      <h1 className="navLogoActive mb-1 inline-block w-full text-center font-bold uppercase tracking-wide xl:text-lg">
        {item.title}
      </h1>
      <div className="cursor-pointer overflow-hidden rounded-3xl border shadow-lg">
        <img
          className="lg:h-[300px] object-cover transition-transform duration-200 ease-in-out hover:scale-105"
          src={item.symptomImage.url}
          alt={item.slug}
        />

        <div className="bg-white p-5 pb-8">
          <p className="pt-1 text-gray-700 sm:text-lg">
            {item.description}
          </p>
          <FreeButton
            tw="lg:hidden flex justify-center items-center text-center text-white dark:text-gray-200 mt-8"
            text={item.buttonText}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default SymptomCard

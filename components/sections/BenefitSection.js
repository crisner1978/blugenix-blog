import { titleize } from 'lib/helpers'
import React from 'react'
import { useQuery } from "react-query"
import { getBenefitIcons } from "../../services/queries"

const BenefitSection = ({ therapyValue }) => {
  const { data: benefits } = useQuery("benefits", () => getBenefitIcons().then((result) => result))

  return (
    <section className="pt-10 pb-2 bg-cyan-100 dark:bg-cyan-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto px-10">
        <h2
          className="text-center md:text-left inline-flex text-3xl sm:text-4xl font-fancy mb-10
                        font-medium leading-normal md:leading-normal lg:leading-snug xl:leading-snug"
        >
          {`The ${therapyValue === "bio-identical" || therapyValue === undefined ? "Blugenix" : therapyValue === "hgh" ? therapyValue.toUpperCase() : titleize(therapyValue)
            } program provides these powerful benefits:`}
        </h2>
        <div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {benefits?.map(({ id, title, text, iconImage: { url } }) => (
              <li key={id} className="flex flex-col items-start mb-5">
                <figure className="benefit_icon">
                  <img src={url} alt="" className="h-10 w-10" />
                </figure>
                <h3 className="mb-3 text-xl dark:text-white">{title}</h3>
                <div>
                  <p className="pr-10 mb-5 font-fancy text-lg text-gray-900 dark:text-gray-200">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BenefitSection
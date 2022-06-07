import { Section, FreeButton } from "../../components"

const StepsSection = ({ setOpen }) => {
  return (
    <>
      <Section
        style_section="py-12 md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10"
        heading="How it works"
        subheading="Three Step Process"
        para_1="Everything is Doctor monitored & Doctor prescribed."
        para_2="Our team of experts will work directly with you to create a custom tailored program to fit your needs and get you feeling your best."
        para_3="In partnership with Telemedicine, everything gets shipped right to your door."
        component={
          <FreeButton
            tw="text-center md:text-left text-white dark:text-gray-200 mt-8"
            text="take your first step"
            onClick={() => setOpen(true)}
          />
        }
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            className="scale-[1.009] rounded-3xl sm:max-w-sm"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651073011/my-upload/vyh4v0uwmwuhpgvtmi0q.jpg"
            alt=""
          />
        </div>
      </Section>

      <div className="mx-auto max-w-6xl pb-8">
        <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-3">
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075090/my-upload/a9wksql2kb2pzvnqpxda.jpg"
              alt="Step 1"
            />
          </div>
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075125/my-upload/au38suzmsu1mzgrczvm6.jpg"
              alt="Step 2"
            />
          </div>
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075148/my-upload/gonhzeluwpd0okuuyrnb.jpg"
              alt="Step 3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default StepsSection
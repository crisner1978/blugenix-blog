import { motion } from 'framer-motion';
import useFadeInAnimation from '../../hooks/useFadeInAnimation';

const MapSection = ({ component }) => {
  const [setRefs, ctrls, fadeInDown] = useFadeInAnimation()
  return (
    <section className="bg-transparent">
      <div className="py-12 max-w-6xl mx-auto px-10 md:flex-row items-center md:flex flex flex-col md:gap-5">
        <motion.div ref={setRefs} animate={ctrls} initial="hidden" variants={fadeInDown} aria-hidden="true" className="md:w-1/2 mb-10">
          <p className="font-fancy text-2xl font-medium lg:text-3xl leading-normal md:leading-normal lg:leading-snug xl:leading-normal">
            100% of our Clients start their program remotely. Lab work is done
            through LabCorp in your local area. We bring the doctor to you via
            video consultations.
          </p>
          {component}
        </motion.div>
        <div className="md:w-1/2">
          <img src="images/map.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default MapSection
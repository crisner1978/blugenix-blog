export const fadeInDown = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

export const fadeLeftToRight = {
  hidden: { opacity: 0, x: -60, y: 0 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, x: 0, y: -100 },
}
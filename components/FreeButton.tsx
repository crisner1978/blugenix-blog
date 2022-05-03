import { MouseEventHandler } from 'react'

interface Props {
  text: string
  tw: string
  onClick: MouseEventHandler
}

const FreeButton = ({ text, tw, onClick }: Props) => {
  return (
    <div className={tw}>
      <button className="page__btn" onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default FreeButton

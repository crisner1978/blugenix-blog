import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg shadow-lg bg-black/10 dark:bg-white/10">
      <div className="absolute left-0 right-0 -top-14">
        <Image className="align-middle rounded-full" src={author.photo.url} alt={author.name} height="100px" width="100px" objectFit="contain" />
      </div>
      <h3 className="text-gray-700 dark:text-gray-100 my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-gray-600 dark:text-gray-200 text-lg">{author.bio}</p>
    </div>
  )
}

export default Author
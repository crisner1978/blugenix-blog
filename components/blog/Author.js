import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black/10 p-12 text-center shadow-lg dark:bg-white/10">
      <div className="absolute left-0 right-0 -top-14">
        {author.photo?.url && (
          <Image
            className="rounded-full align-middle"
            src={author.photo.url}
            alt={author.name}
            height="100px"
            width="100px"
            objectFit="contain"
          />
        )}
      </div>
      <h3 className="my-4 text-xl font-bold text-gray-700 dark:text-gray-100">
        {author.name}
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-200">{author.bio}</p>
    </div>
  )
}

export default Author

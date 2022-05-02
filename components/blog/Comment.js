import moment from 'moment'
import parse from 'html-react-parser'
import { useQuery } from 'react-query'
import { getComments } from 'services/queries'

const Comment = ({ slug }) => {
  
  const { data: comments } = useQuery('comments', () =>
    getComments(slug).then((res) => res)
  )
  
  return (
    <>
      {comments?.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} - {comments.length > 1 ? 'Comments' : 'Comment'}
          </h3>
          {comments?.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 border-b border-gray-100 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {" "} on {" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className='whitespace-pre-line text-gray-600 dark:text-gray-200 w-full'>{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comment

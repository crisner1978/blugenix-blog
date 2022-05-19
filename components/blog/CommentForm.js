import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { submitComment } from '../../services/queries'
import SubmittedComment from './SubmittedComment'

const CommentForm = ({ slug, id }) => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const nameRef = useRef()
  const emailRef = useRef()
  const commentRef = useRef()
  const storeDataRef = useRef()

  useEffect(() => {
    nameRef.current.value = window.localStorage.getItem("name")
    emailRef.current.value = window.localStorage.getItem("email")
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setError(false)
    const { value: comment } = commentRef.current
    const { value: name } = nameRef.current
    const { value: email } = emailRef.current
    const { checked: storeData } = storeDataRef.current
    
    if (!name || !email || !comment) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem("name", name)
      window.localStorage.setItem("email", email)
    } else {
      window.localStorage.removeItem("name", name)
      window.localStorage.removeItem("email", email)
    }

    submitComment(commentObj).then((res) => {
      setSubmitted(true)
      setTimeout(() => {
        router.push("/blog")
      }, 5000)
    })
  }

  return (
    <>
      {submitted ? (
        <SubmittedComment />
      ) : (
        <form onSubmit={onSubmit} className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
          <h3 className="text-sm text-blue-700 dark:text-blue-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="mt-2 py-3" />

          <input
            type="hidden"
            name="id"
            value={id}
          />
          <div className="mb-4 grid grid-cols-1 gap-4">
            <textarea
              ref={commentRef}
              className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-blue-600/50 dark:bg-black/20 dark:text-gray-200 dark:placeholder:text-gray-400/60"
              placeholder="Give us your thoughts"
              name="comment"
              rows={4}
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <input
              ref={nameRef}
              className="singleLineInput"
              type="text"
              placeholder="Leave your name"
              name="name"
            />
            <input
              ref={emailRef}
              className="singleLineInput"
              type="text"
              placeholder="Provide your email"
              name="email"
            />
          </div>
          <div className='grid grid-cols-1 gap-4 mb-4'>
            <div className='flex items-center'>
              <input ref={storeDataRef} type="checkbox" id="storeData" name="storeData" value="true" />
              <label className="text-gray-500 dark:text-gray-200 cursor-pointer ml-4" htmlFor='storeData'>Save my e-mail and name for the next time I leave a comment</label>
            </div>
          </div>
          <div className="flex flex-col p-4 relative">
            {error && (
              <span className="text-red-600 text-xs font-deca font-black tracking-tight uppercase">
                - All Fields are required
              </span>
            )}
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="focus:shadow-outline ease inline-block transform cursor-pointer rounded-full
            bg-pink-600 py-3 px-8 font-fancy text-lg font-medium text-white shadow
              transition duration-300  hover:bg-pink-500 focus:outline-none dark:bg-pink-700 dark:text-gray-200 dark:hover:bg-pink-600"
            >
              Post Comment
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default CommentForm

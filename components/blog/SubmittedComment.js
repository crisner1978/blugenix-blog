import React from 'react'

const SubmittedComment = () => {
  return (
    <div className="my-10 mx-auto flex max-w-2xl flex-col bg-gradient-to-tl from-blue-600 to-blue-900 p-10 text-white dark:from-blue-700/90 dark:to-blue-900/90 dark:text-gray-200">
      <h3 className="text-3xl font-bold">
        Thank you for submitting your comment!
      </h3>
      <p>Once approved, your comment will appear below!</p>
    </div>
  )
}

export default SubmittedComment
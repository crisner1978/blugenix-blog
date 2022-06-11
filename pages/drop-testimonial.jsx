import Head from 'next/head';
import { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { useForm } from 'react-hook-form';

const TestimonialPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop
  });


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err),
        
        setSubmitted(false)
      })
  }

  return (
    <div className="px-3 pt-10 sm:px-10">
      <Head>
        <title>Blugenix Testimonial Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {submitted ? (
        <div>
          <div className="mx-auto flex max-w-2xl flex-col bg-gradient-to-tl from-blue-600 to-blue-900 p-10 text-white dark:from-blue-700/90 dark:to-blue-900/90 dark:text-gray-200">
            <h3 className="text-3xl font-bold">
              Thank you for your testimonial!
            </h3>
            <p>
              Once approved, your testimonial will appear on the Therapies Page!
            </p>
          </div>
          <div className="mx-auto mt-10 mb-8 rounded-lg shadow-lg sm:max-w-2xl">
            <img
              className="rounded-lg shadow-lg"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1654900568/my-upload/yakonkgukm0kruq55xff.jpg"
              alt=""
            />
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-8 flex max-w-2xl flex-col rounded-lg bg-white p-8 text-gray-700 shadow-lg dark:bg-stone-800 dark:text-gray-200"
        >
          <h3 className="text-sm text-pink-500">Loving Hormone Therapy?</h3>
          <h4 className="text-3xl font-bold">Drop Your Testimonial Below!</h4>
          <hr className="mt-2 py-3" />
          {/* name, label, type, placeholder, component, onChange, onBlur, errors */}
          {/* <input
            {...register('_id')}
            type="hidden"
            name="_id"
            // value={post._id}
          /> */}
          <div className="inputWrapper">
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              name="name"
              className="singleLineInput"
              type="text"
              placeholder="John Wayne"
            />
          </div>

          <div className="inputWrapper">
            <label className="formLabel" htmlFor="message">
              Message
            </label>
            <textarea
              {...register('message', { required: true })}
              name="message"
              className="singleLineInput"
              placeholder="Share your experience with Hormone Replacement Therapy and Blugenix. We want to hear from you!"
              rows={8}
            />
          </div>



          <div className="inputWrapper">
            <label className="formLabel">Image</label>
            <input
              {...register('image', { required: true })}
              type="file"
              name=""
              id=""
              className="singleLineInput "
            />
          </div>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is required</span>
            )}
            {errors.message && (
              <span className="text-red-500">
                - The Comment Field is required
              </span>
            )}
            {errors.image && (
              <span className="text-red-500">
                - The Email Field is required
              </span>
            )}
          </div>

          <button type="submit" className="formSubmitBtn">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default TestimonialPage

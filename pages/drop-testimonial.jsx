import { Orbit } from '@uiball/loaders'
import FileInput from 'components/formFields/FileInput'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { submitTestimonial } from 'services/queries'

const TestimonialPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const methods = useForm({ mode: 'onBlur' })
  let newErrors = methods.formState.errors.name || methods.formState.errors.email || methods.formState.errors.message || methods.formState.errors.images
  const accept = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
  }

  const onSubmit = methods.handleSubmit((data) => {
    //if !data or image return
    if (!data || data.images === undefined) {
      return
    } else {
      // set Loading true and scroll to top
      setLoading(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      // destructure data object from form
      const { name, email, message, images } = data
      
      // create new formData object
      const formData = new FormData()
      // attach data to FormData Object
      formData.append('file_1', images[0])
      formData.append('name', name)
      formData.append('message', message)
      formData.append('email', email)

      // post FormData Object to api/testimonial
      submitTestimonial(formData).then((res) => {
        setLoading(false)
        setSubmitted(true)
        setTimeout(() => {
          router.push('/')
        }, 5000)
      })
    }
  })

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
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mb-8 flex max-w-2xl flex-col rounded-lg bg-white p-8 text-gray-700 shadow-lg dark:bg-stone-800 dark:text-gray-200"
          >
            <h3 className="text-sm text-pink-500">Loving Hormone Therapy?</h3>
            <h4 className="text-3xl font-bold">Drop Your Testimonial Below!</h4>
            <hr className="mt-2 py-3" />

            <div className="inputWrapper">
              <label className="formLabel" htmlFor="name">
                Name
              </label>
              <input
                {...methods.register('name', { required: true })}
                name="name"
                className="singleLineInput"
                type="text"
                placeholder="John W."
              />
            </div>

            <div className="inputWrapper">
              <label className="formLabel" htmlFor="name">
                Email
              </label>
              <input
                {...methods.register('email', { required: true })}
                name="email"
                className="singleLineInput"
                type="text"
                placeholder="youremail@example.com"
              />
            </div>

            <div className="inputWrapper">
              <label className="formLabel" htmlFor="message">
                Message
              </label>
              <div className="relative w-full">
                <textarea
                  {...methods.register('message', { required: true })}
                  name="message"
                  className="singleLineInput"
                  placeholder="Share your experience with Hormone Replacement Therapy and Blugenix. We want to hear from you!"
                  rows={8}
                />
                {loading && (
                  <div className="absolute top-5 right-0 left-0 mx-auto max-w-max">
                    <Orbit size={40} speed={1.5} color="#304ffe" />
                  </div>
                )}
              </div>
            </div>
            <div className="inputWrapper">
              <FileInput accept={accept} name="images" />
            </div>

            <div className="flex flex-col p-5">
              {methods.formState.errors?.name && (
                <span className="text-red-500">
                  - The Name Field is required
                </span>
              )}
              {methods.formState.errors?.email && (
                <span className="text-red-500">
                  - The Email Field is required
                </span>
              )}
              {methods.formState.errors?.message && (
                <span className="text-red-500">
                  - The Comment Field is required
                </span>
              )}
              {methods.formState.errors?.images && (
                <span className="text-red-500">
                  - The Image Field is required
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <button disabled={newErrors} type="submit" className={newErrors ? "formResetBtn w-full" : "formSubmitBtn w-full"}>
                {newErrors ? "Errors" : "Submit"}
              </button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  )
}

export default TestimonialPage

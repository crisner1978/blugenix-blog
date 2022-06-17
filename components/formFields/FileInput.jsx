import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'

const FileInput = (props) => {
  const { name, label = name } = props
  const { register, unregister, setValue, watch } = useFormContext()
  const files = watch(name)

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: props.accept,
  })
  
  useEffect(() => {
    register(name, {required: true})
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  return (
    <>
      <label
        className="mb-2 block text-sm font-bold capitalize text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <div {...getRootProps()}>
        <input
          {...props}
          className="focus:shadow-outline w-full appearance-none rounded border 
          py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id={name}
          {...getInputProps()}
        />
        <div
          className={'w-full border border-dashed border-gray-900 p-2 ' +
            (isDragActive ? 'bg-gray-400' : 'bg-gray-200')}>
          {isDragActive ? (
            <p className="my-2 text-center">Drop the files here ...</p>
          ) : (
            <p className="my-2 text-center">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
          {/* Optionally you may display a preview of the file(s) */}
          {!!files?.length && (
            <div className="mt-2 grid grid-cols-1 gap-1">
              {files.map((file) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FileInput

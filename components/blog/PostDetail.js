import moment from 'moment'
import React from 'react'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    // console.log(modifiedText)

    if(obj) {
      if(obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if(obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }

      if(obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case "heading-three":
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case "paragraph":
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case "heading-four":
        return <h4 key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case "image":
        return (
          <img key={index} src={obj.src} alt={obj.title} height={obj.height} width={obj.width} />
        );
      default:
        return modifiedText;
    }
  }

  return (
    <div className='mb-8 lg:p-8 pb-12 rounded-lg shadow-lg dark:bg-stone-800 bg-white'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img className='object-top h-full w-full rounded-t-lg' src={post.featuredImage.url} alt={post.title} loading="lazy" />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className="flex items-center justify-center space-x-2">
            {post.author.photo?.url && <img
              className="h-10 w-10 rounded-full"
              src={post.author.photo.url}
              alt={post.author.name}
              loading="lazy"              
            />}
            <p className="text-sm font-extralight">
              Blog post by{' '}
              <span className="font-semibold text-blue-600">
                {post.author.name}
              </span>{' '}
              - Published at {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail


function OurProducts(image) {
  return (
    <div className='w-full max-w-[510px] h-[350px] hover:scale-[1.1] duration-300'>
      <img className=' w-full h-full rounded-[10px]' src={image.images} alt="" />
    </div>
  )
}

export default OurProducts;
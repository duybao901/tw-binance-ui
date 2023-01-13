import React from 'react'
// border-2 border-solid border-orange-400
const HeaderSearch = () => {
  return (
    <div className="h-10 bg-transparent rounded-full bg-filled-inputsearch bg-[length:100%_100%] flex items-center p-4" style={{ width: "420px" }}>
      <i className='bx bx-search mr-2 text-lg text-stone-600'></i>
      <input type="text" placeholder='Search' className='border-none bg-transparent outline-none text-base w-full'></input>
    </div>
  )
}

export default HeaderSearch
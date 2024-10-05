import React from 'react'

const MobileCanva = (
  {
    children
  }
) => {
  return (
    <div
      className="
      bg-slate-200 text-slate-800
      outline-2 border-black
      w-full h-full
      md:w-[510px] md:h-[900px]
      "
    >
      {children}
    </div>
  )
}

export default MobileCanva
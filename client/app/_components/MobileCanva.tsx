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
      border-2 border-black
      w-full h-full
      sm:w-[510px] sm:h-[900px]
      "
    >
      {children}
    </div>
  )
}

export default MobileCanva
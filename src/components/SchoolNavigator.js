import React from 'react'
import { useLocation } from 'react-router-dom'

const SchoolNavigator = ({ children }) => {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className='flex flex-col gap-3'>
      {/* header */}
      <div className='flex flex-col justify-center w-full p-4 mx-auto mb-5 rounded-md shadow-xl max-w-7xl from-orange-100 to-yellow-100 bg-gradient-to-bl h-60'>
        <p className='mb-2'>تنقلات سريعة</p>
        <div className='flex justify-between w-full max-w-full min-w-full gap-8 p-2 mx-auto overflow-scroll bg-white shadow-lg navigation'>
          <a href='/school/teachers' className='flex flex-col min-w-[200px] w-[200px] text-center gap-1'>
            <p>المدرسين</p>
            <hr className={`bg-orange-200 py-[0.5px] ${path == '/school/teachers' && "bg-orange-500"}`} />
          </a>
          <a href='/' className='flex flex-col min-w-[200px] w-[200px] text-center gap-1'>
            <p>الطلاب</p>
            <hr className={`bg-orange-200 py-[0.5px] ${path == '/school/students' && "bg-orange-500"}`} />
          </a>
          <a href='/' className='flex flex-col min-w-[200px] w-[200px] gap-1 text-center'>
            <p>المواد الدراسية</p>
            <hr className={`bg-orange-200 py-[0.5px] ${path == '/school/subjects' && "bg-orange-500"}`} />
          </a>
          <a href='/' className='flex flex-col min-w-[200px] w-[200px] text-center gap-1'>
            <p>الفصول</p>
            <hr className={`bg-orange-200 py-[0.5px] ${path == '/school/classes' && "bg-orange-500"}`} />
          </a>
        </div>
      </div>
      {/* content */}
      <div className='p-5'>
        {children}
      </div>
    </div>
  )
}

export default SchoolNavigator
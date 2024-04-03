import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container'
import SchoolNavigator from '../../components/SchoolNavigator'
import { ApiContextProvider } from '../../context/ApiContext'
import Loading from '../../components/Loading'
import { GoPlus } from "react-icons/go";
import { Error } from '../../components/Error'
import TeacherComponent from '../../components/school/TeacherComponent'
import CreateTeacher from '../../components/school/CreateTeacher'

const Teachers = () => {
  const apiContext = useContext(ApiContextProvider)

  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const getTeachers = async () => {
    try {
      const res = await apiContext?.getTeachers()
      setTeachers(res);
    } catch (err) {
      setErr(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getTeachers()
  }, [])

  const [open, setOpen] = useState(false)
  return (
    <Container>
      <SchoolNavigator>

        {/* create new teacher */}
        <CreateTeacher getTeachers={getTeachers} open={open} setOpen={setOpen} />


        <div className='flex flex-col gap-2'>
          {/* search */}
          <div className='flex flex-col w-full gap-3 mx-auto md:max-w-7xl'>
            <div className='flex flex-col justify-between w-full gap-2 md:flex-row'>
              <div className='flex flex-col w-full gap-1 md:w-72 usernameOrEmail'>
                <p>اسم المستخدم او الايميل</p>
                <input placeholder='اكتب' />
              </div>
              <div className='flex flex-col w-full gap-3 md:w-72 sm:flex-row'>
                <div className='flex flex-col w-full gap-1 md:w-72 usernameOrEmail'>
                  <p>الاسم الاول</p>
                  <input placeholder='اكتب' />
                </div>
                <div className='flex flex-col w-full gap-1 md:w-72 usernameOrEmail'>
                  <p>الاسم الثاني</p>
                  <input placeholder='اكتب' />
                </div>
              </div>
            </div>
            <button className='my-auto btn-primary h-fit'>أبحث</button>
          </div>
          {/* data */}
          <div className='flex flex-col gap-5 p-2 md:flex-row teachersContainer'>
            {/* create */}
            <div onClick={() => setOpen(true)} className='flex flex-col justify-center p-3 transition-all border border-orange-200 cursor-pointer hover:bg-orange-50 w-72 h-44 createNewTeacher'>
              <span className='mx-auto'>
                <GoPlus />
              </span>
            </div>
            {/* teachers */}
            <div className='flex flex-col w-full md:w-[calc(100%-290px)] h-fit gap-4 teachers'>
              {
                teachers?.length > 0 &&
                teachers?.map((teacher) => (
                  <TeacherComponent getTeachers={getTeachers} key={teacher?.id} teacher={teacher} />
                ))
              }

              {
                teachers?.length === 0 && !loading ?
                  <div className='warningContainer'>
                    <p>لا يوجد مدرسين حاليا.</p>
                  </div>
                  : null
              }

              {
                loading && <Loading />
              }

              {
                err && <Error />
              }

            </div>
          </div>
        </div>
      </SchoolNavigator>
    </Container>
  )
}

export default Teachers

import React, { useContext, useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import OpenFromBottom from '../OpenFromBottom';
import { ApiContextProvider } from '../../context/ApiContext';

const TeacherComponent = ({ teacher, getTeachers }) => {
  const apiContext = useContext(ApiContextProvider)

  const [open, setOpen] = useState(null)

  // get teacher
  const [teacherData, setTeacherData] = useState({})
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const getTeacher = async () => {
    try {
      const res = await apiContext?.getTeacher(open)
      setTeacherData(await res);
    } catch (err) {
      setErr(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    open && getTeacher()
  }, [open])


  const [levels, setLevels] = useState([])
  const getSchoolLevels = async () => {
    const res = await apiContext?.getSchoolLevels()
    setLevels(await res);
  }
  useEffect(() => {
    open && getSchoolLevels()
  }, [open])

  const [subjects, setSubjects] = useState([])
  const getSchoolSubject = async () => {
    const res = await apiContext?.getSchoolSubject()
    setSubjects(await res);
  }
  useEffect(() => {
    open && getSchoolSubject()
  }, [open])


  // infos
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [teacherLevels, setTeacherLevels] = useState([])
  const [teacherSubjects, setTeacherSubjects] = useState([])

  useEffect(() => {
    setUsername(teacherData?.user_details?.username ?? '')
    setFirstName(teacherData?.user_details?.first_name ?? '')
    setLastName(teacherData?.user_details?.last_name ?? '')
    setEmail(teacherData?.user_details?.email ?? '')
    setTeacherLevels(teacherData?.levels ?? [])
    setTeacherSubjects(teacherData?.subjects ?? [])
  }, [teacherData])


  // update teacher
  const updateTeacherProfile = async () => {
    try {
      const res = await apiContext?.updateTeacherProfile(teacherData?.id, teacherLevels, teacherSubjects)
      if (res.id) {
        getTeachers()
        getTeacher()
        setOpen(null)
        apiContext?.setMessage('تم الحفظ بنجاح')
      } else {
        apiContext?.setMessage(res.subjects && `المواد الدراسية:${res.subjects}` || res.levels && `المستوي الدراسي:${res.subjects}`)
      }
    } catch (err) {
      console.log("updateError: ", err);
    }
  }


  return (
    <div key={teacher?.id} className='relative p-3 border rounded-md shadow-md border-amber-200 teacher'>
      {/* edit and delete */}
      <div className='absolute flex gap-5 text-lg left-2'>
        {/* <span className='text-red-600 transition-all cursor-pointer hover:text-red-500'>
          <FaRegTrashAlt />
        </span> */}
        <span onClick={() => setOpen(teacher?.id)} className='text-blue-600 transition-all cursor-pointer hover:text-blue-500'>
          <FaEdit />
        </span>
      </div>

      <div className='flex gap-2 top'>
        <span className='my-auto text-4xl'>
          <CgProfile />
        </span>
        <div className='flex flex-col'>
          <p className='my-auto'>{teacher?.user_details?.username}</p>
          <small>{teacher?.user_details?.email}</small>
        </div>
      </div>
      <div className='flex gap-3 names'>
        <p>{teacher?.user_details?.first_name}</p>
        <p>{teacher?.user_details?.last_name}</p>
      </div>
      <hr className='my-2' />
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col levels'>
          {
            teacher?.levels_details?.map((level) => (
              <div key={level?.id} className='p-1'>
                <p>- {level?.name}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col subjects'>
          {
            teacher?.subjects_details?.map((subject) => (
              <div key={subject?.id} className='p-1'>
                <p>- {subject?.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <hr className='my-2' />
      <small>تاريخ الانضمام: {teacher?.user_details?.date_joined?.slice(0, 10)}</small>


      {/* update teacher */}
      <OpenFromBottom open={open == teacher?.id} setOpen={setOpen}>
        <div className='flex flex-col justify-center h-full gap-5'>
          <div className='flex flex-col justify-between gap-5 md:flex-row'>

            {/* img & fields */}
            <div className='right flex flex-col lg:flex-row gap-3 md:w-[50%]'>
              {/* img */}
              <div className='relative w-full max-w-[300px]'>
                <img className='w-full shadow-lg' alt='aa' src='/images/profile.jpg' width={100} height={100} />
                <div className='absolute bottom-2 right-2'>
                  <span className='text-blue-700 cursor-pointer'>
                    <FaEdit />
                  </span>
                </div>
              </div>
              {/* fields */}
              <div className='flex flex-col w-full gap-5 input'>
                <input readOnly placeholder='اسم المستخدم' defaultValue={username} />
                <div className='flex flex-col gap-3 lg:flex-row'>
                  <input readOnly placeholder='الاسم الأول' defaultValue={firstName} />
                  <input readOnly placeholder='الاسم الثاني' defaultValue={lastName} />
                </div>
                <input readOnly placeholder='البريد الالكتروني' defaultValue={email} />
                <small>لا يمكن التعديل علي معلومات المعلم.</small>
              </div>
            </div>

            <div className='h-full p-[0.5px] bg-indigo-300'></div>

            {/* subjecs & levels */}
            <div className='left flex flex-col gap-3 md:w-[50%]'>
              {/* levels */}
              <div className='flex flex-col gap-1 levels'>
                <p>المستوي الدراسي</p>
                <div className='flex rounded-md shadow-lg max-h-[140px] min-h-fit overflow-scroll flex-wrap justify-around gap-10 p-3 bg-indigo-100'>
                  {
                    levels?.map((l) => (
                      <div onClick={() => {
                        const exist = teacherLevels?.find(f => f == l?.id)
                        if (exist) {
                          setTeacherLevels(teacherLevels?.filter(f => f !== l?.id))
                        } else {
                          setTeacherLevels(prev => [...prev, l?.id])
                        }
                      }} key={l?.id} className={`
                      w-full max-w-[130px] text-center p-3 transition-all bg-white rounded-md shadow-md cursor-pointer hover:bg-emerald-100 h-fit level
                      ${teacherLevels?.find(f => f == l?.id) && "bg-emerald-200"}
                      `}>
                        <p>{l?.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* subjects */}
              <div className='flex flex-col gap-1 levels'>
                <p>المواد المتخصص فيها</p>
                <div className='flex rounded-md shadow-lg max-h-[140px] min-h-fit overflow-scroll flex-wrap justify-around gap-10 p-3 bg-indigo-100'>
                  {
                    subjects?.map((l) => (
                      <div onClick={() => {
                        const exist = teacherSubjects?.find(f => f == l?.id)
                        if (exist) {
                          setTeacherSubjects(teacherSubjects?.filter(f => f !== l?.id))
                        } else {
                          setTeacherSubjects(prev => [...prev, l?.id])
                        }
                      }} key={l?.id} className={`
                      w-full max-w-[130px] text-center p-3 transition-all bg-white rounded-md shadow-md cursor-pointer hover:bg-emerald-100 h-fit level
                      ${teacherSubjects?.find(f => f == l?.id) && "bg-emerald-200"}
                      `}>
                        <p>{l?.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

          </div>
          <button onClick={updateTeacherProfile} className='btn-primary'>تم</button>
        </div>
      </OpenFromBottom>
    </div>
  )
}

export default TeacherComponent
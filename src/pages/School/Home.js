import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container'
import SchoolNavigator from '../../components/SchoolNavigator'
import { CgEye, CgSpinner } from 'react-icons/cg'
import { ApiContextProvider } from '../../context/ApiContext'

const Home = () => {
  const apiContext = useContext(ApiContextProvider)

  const [schoolProfile, setSchoolProfile] = useState({})
  const [loading, setLoading] = useState(true)

  const getSchoolProfile = async () => {
    try {
      const res = await apiContext?.getSchoolProfile()
      setSchoolProfile(res)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getSchoolProfile()
  }, [])
  return (
    <Container>
      <SchoolNavigator>
        <div className='btns'>
          {
            loading ? (
              <button className='flex gap-3 btn-secoundry'>
                <span className='mx-auto text-2xl animate-spin'>
                  <CgSpinner />
                </span>
              </button>
            ) :
              <a href={`/school/${schoolProfile?.user_details?.username}/${schoolProfile?.user_details?.id}`}>
                <button className='flex gap-3 btn-secoundry'>
                  <span className='my-auto'>
                    <CgEye />
                  </span>
                  <p className='my-auto'>رؤية موقعك</p>
                </button>
              </a>
          }
        </div>
      </SchoolNavigator>
    </Container>
  )
}

export default Home

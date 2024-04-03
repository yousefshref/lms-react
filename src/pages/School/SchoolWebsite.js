import React from 'react'
import { CgArrowLeft, CgArrowRight, CgCheck, CgInstagram, CgPhone, CgProfile, CgQuote, CgTwitter } from 'react-icons/cg'
import { FaFacebook } from 'react-icons/fa'
import { PiChalkboardTeacher } from "react-icons/pi";
import { GoMail } from 'react-icons/go'

export const SchoolWebsite = () => {
  const teachersArr = [
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
    {
      "img": "/images/employees/teacher1.jpg",
      "name": "مدرس رقم واحد",
      "des": "مدرس متخصص في مجالة وهو من افضل المدرسين من 13 سنة !",
      "job": "مدرس",
      "subject": "رياضيات",
    },
  ]

  const testimonials = [
    {
      "text": "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "text": "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "text": "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "text": "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "text": "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ]

  const scrollHandler = (position, id) => {
    const div = document.getElementById(id)
    if (position == 'left') {
      div.scrollLeft = div.scrollLeft - 300
    }
    if (position == 'right') {
      div.scrollLeft = div.scrollLeft + 300
    }
  }

  return (
    <div className='flex flex-col'>
      {/* top */}
      <div className='flex flex-col justi```fy-between gap-4 p-3 bg-indigo-900 sm:flex-row md:px-10'>
        {/* icons */}
        <div className='flex gap-5 mx-auto text-xl text-white icons sm:mx-0'>
          <a href='instagrame'>
            <span>
              <CgInstagram />
            </span>
          </a>
          <a href='twitter'>
            <span>
              <CgTwitter />
            </span>
          </a>
          <a href='facebooklink'>
            <span>
              <FaFacebook />
            </span>
          </a>
        </div>
        {/* phone and contanct infos */}
        <div className='flex flex-row gap-4 mx-auto text-white sm:mx-0'>
          <div className='flex gap-2'>
            <p style={{ direction: "ltr" }}>test@gmail.com</p>
            <span className='my-auto text-lg'>
              <GoMail />
            </span>
          </div>
          <div className='flex gap-2'>
            <p style={{ direction: "ltr" }}>+20 109 575 3871</p>
            <span className='my-auto text-lg'>
              <CgPhone />
            </span>
          </div>
        </div>
      </div>

      {/* header */}
      <header className='flex justify-around'>
        {/* logo */}
        <div className='my-auto'>
          <img className='w-full my-auto md:max-w-[120px] max-w-[80px]' src='/images/schoo_logo.png' alt='school_logo' width={50} height={50} />
        </div>
        {/* menus */}
        <div className='flex my-auto text-base md:text-xl gap-7'>
          <p className='cursor-pointer text-neutral-800'>معلومات عنا</p>
          <p className='cursor-pointer text-neutral-800'>الكورسات</p>
          <p className='cursor-pointer text-neutral-800'>تواصل معنا</p>
        </div>
      </header>

      {/* landing */}
      <div className='
      w-full h-[74vh] bg-fixed bg-cover flex flex-col gap-5 items-center 
      justify-evenly text-white relative bg-[url("./assets/images/bg_school.jpg")]'>

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

        <div className='z-10 flex flex-col h-full text-center gaps-5 justify-evenly'>
          <p className='text-lg'>مش عارف ايه هنا كدة</p>
          <h3 className='text-5xl font-bold'>مدرسة ابو محمد السيد وكدة بقا</h3>
          <button className='mx-auto custom-button primary-button w-full max-w-[200px]'>المهم يعني</button>
        </div>

      </div>


      <br />
      <br />
      <br />
      <br />
      <br />

      {/* about */}
      <div className='flex w-full p-3'>
        <div className='w-full relative bg-[url("./assets/images/bg_about.jpg")] shadow-lg h-[600px] bg-cover rounded-md max-w-6xl bg-center p-4 mx-auto about bg-emerald-100'>
          <div className='absolute bottom-0 right-0 z-20 w-full p-3 bg-white bg-opacity-75 md:top-0 md:w-1/2 h-1/2 md:h-full'></div>
          <div className='absolute bottom-0 right-0 z-20 flex flex-col justify-center w-full gap-3 p-3 md:top-0 md:w-1/2 h-1/2 md:h-full'>
            <h3 className='text-3xl'>معلومات عن مدرسة بلا بلا:</h3>
            <p>
              ممكن هنا شويه حجات
              وهنا شوية تانيين واهي ماشيه
            </p>
            <button className='custom-button danger-button w-fit'>اتصل بنا بسهولة</button>
          </div>
        </div>
      </div>
      <ol className="items-center w-full max-w-6xl p-5 mx-auto md:flex">
        <li className="relative mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 text-white bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 md:ring-8 dark:ring-gray-900 shrink-0">
              <CgCheck />
            </div>
            <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 md:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 ">تأسيس المدرسة</h3>
            <time className="block mb-2 font-normal leading-none text-gray-400 text-md dark:text-gray-500">تأسست في 2005</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">بدأت المدرسة بأقوي المدرسين واكثر الطلاب في اول سنة تم تأسيسها !</p>
          </div>
        </li>
        <li className="relative mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 text-white bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 md:ring-8 dark:ring-gray-900 shrink-0">
              <CgCheck />
            </div>
            <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 md:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 ">تأسيس المدرسة</h3>
            <time className="block mb-2 font-normal leading-none text-gray-400 text-md dark:text-gray-500">تأسست في 2005</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">بدأت المدرسة بأقوي المدرسين واكثر الطلاب في اول سنة تم تأسيسها !</p>
          </div>
        </li>
        <li className="relative mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 text-white bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 md:ring-8 dark:ring-gray-900 shrink-0">
              <CgCheck />
            </div>
            <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 md:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 ">تأسيس المدرسة</h3>
            <time className="block mb-2 font-normal leading-none text-gray-400 text-md dark:text-gray-500">تأسست في 2005</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">بدأت المدرسة بأقوي المدرسين واكثر الطلاب في اول سنة تم تأسيسها !</p>
          </div>
        </li>
      </ol>



      <br />
      <br />
      <br />
      <br />
      <br />


      {/* employees */}
      <div className='relative flex flex-col w-full max-w-6xl gap-3 p-3 mx-auto overflow-hidden'>
        <h3 className='flex gap-2 text-lg md:text-2xl'>مدرسة <span className='text-orange-800'>بلا بلا</span> لديها افضل المدرسين <span className='my-auto'><PiChalkboardTeacher /></span></h3>
        <span onClick={() => scrollHandler('right', 'teachers')} className='absolute z-20 flex p-3 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer transition-all hover:scale-[104%] -right-0 bg-base-100 top-1/2'>
          <CgArrowRight />
        </span>
        <span onClick={() => scrollHandler('left', 'teachers')} className='absolute z-20 flex p-3 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer transition-all hover:scale-[104%] -left-0 bg-base-100 top-1/2'>
          <CgArrowLeft />
        </span>


        <div id='teachers' className="gap-5 carousel rounded-box">
          {
            teachersArr?.map((t, i) => (
              <div key={i} className="text-white shadow-md carousel-item card min-w-96 max-w-96 from-base-100 to-indigo-900 bg-gradient-to-br">
                <figure><img src={t.img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {t.name}
                  </h2>
                  <p>{t.des}</p>
                  <div className="justify-end card-actions">
                    <div className="badge badge-outline">{t.job}</div>
                    <div className="badge badge-outline">{t.subject}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />

      {/* testimonials */}
      <div className='flex flex-col w-full gap-3 p-3 text-center'>
        <h3 className='text-2xl'>نتشرف بأراء عملاءنا الكرام 🙏🏻</h3>
        <div className="relative w-full max-w-xl mx-auto carousel">
          <div className='absolute z-30 flex justify-between w-full max-w-xl p-3 mx-auto -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span onClick={() => scrollHandler('right', 'testimonials')} className=' z-20 flex p-3 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer transition-all hover:scale-[104%] opacity-15 hover:opacity-80 bg-base-100 right-1 top-1/2'>
              <CgArrowRight />
            </span>
            <span onClick={() => scrollHandler('left', 'testimonials')} className=' z-20 flex p-3 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer transition-all hover:scale-[104%] opacity-15 hover:opacity-80 left-1 bg-base-100 top-1/2'>
              <CgArrowLeft />
            </span>
          </div>
          <div id='testimonials' className='flex overflow-x-auto carousel'>
            {
              testimonials?.map((t, i) => (
                <div key={i} className="flex flex-col w-full gap-3 py-5 text-center shadow-md h-fit carousel-item from-orange-100 to-indigo-100 bg-gradient-to-bl">
                  <span className='mx-auto text-5xl'>
                    <CgProfile />
                  </span>
                  <p className='w-full mx-auto max-w-fit'>{t.text}</p>
                  <span className='flex p-3 mx-auto text-5xl bg-blue-300 rounded-full shadow-md'>
                    <CgQuote />
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />


      {/* footer */}
      <footer className="p-10 footer bg-base-200 text-base-content">
        <aside>
          <img width={300} height={300} src='/images/linkawyx_logo.png' alt='linkawyx' />
          <p>شركة لينكاوي<br />تقديم الخدمات العديدة منذ xx سنة !!</p>
        </aside>
        <nav>
          <h6 className="footer-title">الخجمات</h6>
          <a className="link link-hover">العلامات التجارية</a>
          <a className="link link-hover">طلب خدمة</a>
          <a className="link link-hover">الخدمات المتاحة</a>
          <a className="link link-hover">الاعلانات</a>
        </nav>
        <nav>
          <h6 className="footer-title">الشركة</h6>
          <a className="link link-hover">عننا</a>
          <a className="link link-hover">التواصل</a>
          <a className="link link-hover">الوظائف</a>
        </nav>
        <nav>
          <h6 className="footer-title">الشروظ والاحكام</h6>
          <a className="link link-hover">شروط الاستخدام</a>
          <a className="link link-hover">الخصوصية</a>
        </nav>
      </footer>

    </div>
  )
}

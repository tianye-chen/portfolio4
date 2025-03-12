import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import { LuGraduationCap, LuMousePointer2, LuBriefcase } from 'react-icons/lu'
import { IoCodeSlash, IoMailOutline } from 'react-icons/io5'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { PiHandWavingFill } from 'react-icons/pi'
import { IoIosArrowDown } from 'react-icons/io'
import { FaLaptopCode, FaRegUser} from 'react-icons/fa'
  
function App() {
  gsap.registerPlugin(ScrollTrigger)

  const broad_skills = [
    'Machine Learning', 'Deep Learning', 'Data Science', 'Web Dev', 'Software Engineering', 'Game Design & Dev'
  ]

  const prog_skills = [
    'Python', 'JavaScript', 'C#', 'Java', 'PyTorch', 'Unity', 'React', 'Firebase'
  ]

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      university: 'SUNY University at Buffalo',
      focus: 'Artificial Intelligence',
      duration: '2023 - 2025',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'CUNY Brooklyn College',
      duration: '2019 - 2023',
    },
  ]

  const experience = [
    {
      title: 'Fellow',
      company: 'CUNY Tech Prep',
      duration: '2022 - 2023',
      description: 'Full-stack web development and professional development program',
    }
  ]

  return (
    <div class="min-h-screen">
      <div class='min-h-screen flex flex-row gap-8 items-center justify-center relative overflow-hidden md:text-left text-center'>
        <div class=''>
          <h1 class='text-3xl text-emerald-500 font-extrabold font-stretch-150% flex items-center'> <PiHandWavingFill class='mr-2'/> Hello, I'm </h1>
          <h1 class='text-6xl font-extrabold mb-4 bg-clip-text bg-black leading-normal
                    transition-all duration-450 ease-in-out 
                    bg-gradient-to-r from-purple-500 via-emerald-500 to-sky-500
                    hover:bg-gradient-to-r hover:from-purple-500 hover:via-emerald-500 hover:to-sky-500 hover:text-transparent'>Tianye Chen</h1>
          <p class='text-xl text-emerald-500 mb-4 font-bold'>Master's Graduate in Computer Science</p>
          <p class='font-light'> Specializing in machine learning and deep learning</p>
        </div>
        <div class='flex flex-row gap-4 items-center justify-center bottom-1/4 min-w-screen absolute px-6 text-3xl text-emerald-500'>
          <FiGithub/>
          <FiLinkedin/>
          <IoMailOutline/>
        </div>

        <IoIosArrowDown class='text-4xl text-emerald-500 absolute flex justify-center bottom-10'/>
      </div>

      <section class='py-20 bg-teal-50'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <LuGraduationCap class='mr-2'/> Education</h2>
          <div class='grid grid-cols-1 gap-12'>
            {education.map((edu, index) => (
              <div class='border-l-2 border-emerald-200 pl-8'>
                <p class='text-lg font-semibold'>{edu['university']}  <span class='text-gray-500 text-sm'>{edu['duration']}</span></p>
                <p class='text-gray-500 mb-2 text-balance font-semibold'>{edu['degree']}</p>
                {edu['focus'] && <p class='text-gray-500'>Focus in {edu['focus']}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class='py-20'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <IoCodeSlash class='mr-2'/> Technologies </h2>
          <div class='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {prog_skills.map((skill, index) => (
              <div class='bg-teal-50 py-4 pl-4 pr-32 rounded-lg shadow-md text-left text-nowrap font-light' key={index}> 
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class='py-20 bg-teal-50'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <LuMousePointer2 class='mr-2'/> Skills </h2>
          <div class='grid grid-col-2 md:grid-cols-4 gap-4'>
            {broad_skills.map((skill, index) => (
              <div class='bg-white py-4 pl-4 pr-24 rounded-lg shadow-md text-left text-nowrap font-light' key={index}> 
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class='py-20'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <LuBriefcase class='mr-2'/> Experience </h2>
          <div class='grid grid-cols1 gap-12'>
            {experience.map((exp, index) => (
              <div class='border-l-2 border-emerald-200 pl-8'>
                <p class='text-lg font-semibold'>{exp['company']}  <span class='text-gray-500 text-sm'>{exp['duration']}</span></p>
                <p class='text-gray-500 mb-2 text-balance font-semibold'>{exp['title']}</p>
                <p class='text-gray-500'>{exp['description']}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class='py-20 bg-teal-50'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <FaLaptopCode class='mr-2'/> Projects </h2>
        </div>
      </section>

      <section class='py-20'>
        <div class='max-w-4xl mx-auto px-4'>
          <h2 class='text-3xl font-bold mb-8 flex items-center'> <FaRegUser class='mr-2'/> About Me</h2>
        </div>
      </section>
    </div>
  )
}

export default App

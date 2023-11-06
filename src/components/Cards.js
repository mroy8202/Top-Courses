import React from 'react'
import Card from "./Card"

const Cards = ({courses}) => {

    let allCourses = [];

    // returns list of all courses recieved from the api response
    const getCourses = () => {
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (courses) => {
                return <Card key={courses.id} courses={courses}/>
            } )
        }
    </div>
  )
}

export default Cards
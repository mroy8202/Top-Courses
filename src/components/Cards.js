import React, { useState } from 'react'
import Card from "./Card"

const Cards = ({courses, category}) => {

    let allCourses = [];
    const[likedCourses, setLikedCourses] = useState([]);

    // returns list of all courses recieved from the api response
    const getCourses = () => {
        if(category === "All") {
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }

        else {
            // pass only specific category's data
            return courses[category];
        }
        
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (courses) => {
                return <Card key={courses.id} courses={courses} likedCourses={likedCourses}
                setLikedCourses={setLikedCourses} />
            } )
        }
    </div>
  )
}

export default Cards
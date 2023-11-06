import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({courses, likedCourses, setLikedCourses}) => {

    function clickHandler() {
        if(likedCourses.includes(courses.id)) {
            // already liked, then unlike that course
            setLikedCourses( (prev) => prev.filter( (cid) => cid !== courses.id ) )
            toast.warning("Like Removed");
        }
        else {
            // not liked yet
            // insert into liked courses
            if(likedCourses.length === 0) {
                setLikedCourses([courses.id]);
            }
            else {
                setLikedCourses( (prev) => [...prev, courses.id] );
            }
            toast.success("Liked Succesfully");
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div>
            <div className='relative'>
                <img src={courses.image.url}></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(courses.id) ? (<FcLike fontSize="1.75rem" />) :
                            (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{courses.title}</p>
                <p className='mt-2 text-white'>
                    {
                        courses.description.length > 100 ? (courses.description.substr(0, 100) + "...") : (courses.description)
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card
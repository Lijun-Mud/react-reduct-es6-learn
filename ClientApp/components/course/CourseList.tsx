import *as React from 'react';

import { Course } from '../../store/Course';
import {CourseListRow} from './CourseListRow';

interface CourseProps{
    courses:Course[]
}

export const CourseList : React.SFC<CourseProps> =(props) => {
    return <table className="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map(course =>
                <CourseListRow key={course.id} course={course}/>
                )}
        </tbody>
       </table>;
}

//return <div>
//           {props.courses.map(course => <li key={course.length}>{course.title}</li>)}
//       </div>;

interface WelcomeProps {
    name: string,
}
 
export const Welcome : React.StatelessComponent<WelcomeProps> =(props) => {
    return <p>Hello, {props.name}</p>;
}
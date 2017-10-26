import *as React from 'react';

import {Course} from '../../store/Course';

interface CourseProps{
    courses:Course[]
}

export const CourseList : React.SFC<CourseProps> =(props) => {
    return <div>
        {props.courses.map(course=><li key={course.length}>{course.title}</li>)}
    </div>;
}

interface WelcomeProps {
    name: string,
}
 
export const Welcome : React.StatelessComponent<WelcomeProps> =(props) => {
    return <p>Hello, {props.name}</p>;
}

//interface WelcomeProps {
//    name: string,
//}
 
//export const Welcome: React.SFC<WelcomeProps> = (props) => {
//    return <p>Hello, {props.name}</p>;
//}


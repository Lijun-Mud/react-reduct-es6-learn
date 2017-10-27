import * as React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../store/Course';

interface CourseProps {
    course:Course,
}

export const CourseListRow: React.SFC<CourseProps> = (props) => {
    const { course } = props;
    return <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
           </tr>;
}
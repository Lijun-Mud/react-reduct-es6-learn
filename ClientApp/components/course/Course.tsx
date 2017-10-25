import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {ApplicationState} from '../../store/index';
import * as CourseStore from '../../store/Course';

type CourseProps = CourseStore.CourseState & typeof CourseStore.actionCreators & RouteComponentProps<{}>;

class Course extends React.Component<CourseProps, {}> {
    componentWillMount() {
        this.props.requestCourses();
    }

    public render() {
        let courses = this.props.courses;
        return <div>
            courses:{this.props.isLoading.toString()}
            <ul>
            {courses.map(course =><li key={course.length}>{course.title}</li>)}
            </ul>
               </div>;
    };
}

export default connect(
    (state: ApplicationState) => state.course,
    CourseStore.actionCreators
)(Course) as typeof Course;

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {ApplicationState} from '../../store/index';
import * as CourseStore from '../../store/Course';

type CourseProps = CourseStore.CourseState & typeof CourseStore.actionCreators & RouteComponentProps<{}>;

class Course extends React.Component<CourseProps,{}> {
    public render() {
        return <div>
                   courses
               </div>;
    };
}

export default connect(
    (state: ApplicationState) => state.course,
    CourseStore.actionCreators
)(Course) as typeof Course;

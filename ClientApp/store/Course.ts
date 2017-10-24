﻿import { addTask } from 'domain-task';
import {Reducer,Action} from 'redux';
import { AppThunkAction } from './common';
import CourseApi from '../api/mockCourseApi';

type LOAD_COURSES = 'LOAD_COURSES';
const LOAD_COURSES: LOAD_COURSES = 'LOAD_COURSES';
type RECEIVE_COURSES = 'RECEIVE_COURSES';
const RECEIVE_COURSES: RECEIVE_COURSES = 'RECEIVE_COURSES';
type RECEIVE_COURSES_FAILED = 'RECEIVE_COURSES_FAILED';
const RECEIVE_COURSES_FAILED: RECEIVE_COURSES_FAILED = 'RECEIVE_COURSES_FAILED';

export interface Course {
    id: string,
    title: string,
    authorId: string,
    category: string,
    length:string,
}

export interface CourseState {
    isLoading: boolean,
    coursed: Course[],
    error?:{},
}

interface LoadCourseAction {
    type: LOAD_COURSES,
}

interface ReceiveCourseAction {
    type: RECEIVE_COURSES,
    courses:Course[],
}

interface ReceiveCourseFailedAction {
    type: RECEIVE_COURSES_FAILED,
    error:{}
}

type KnownAction = LoadCourseAction | ReceiveCourseAction | ReceiveCourseFailedAction;

export  const actionCreator= {
    requestCourses:():AppThunkAction<KnownAction>=>(dispatch, getState) => {
        let fetchTask = CourseApi.getAllCourses().then((data) => {
            const courses = <Course[]>data;
            dispatch(<ReceiveCourseAction>{ type: RECEIVE_COURSES,courses});
        }).catch((error) => {
            dispatch(<ReceiveCourseFailedAction>{type:RECEIVE_COURSES_FAILED,error});
        });
        addTask(fetchTask);
        dispatch(<LoadCourseAction>{type:LOAD_COURSES});
    }
}

export const reducer:Reducer<CourseState>=(state: CourseState, imcomingAction: Action) => {
    const action = imcomingAction as KnownAction;
    switch (action.type) {
        case LOAD_COURSES:
            return <CourseState>{
                isLoading: true,
                coursed: []
            };
        case RECEIVE_COURSES:
            return <CourseState>{
                isLoading: false,
                coursed: action.courses
            };
        default:
            const exhaustiveCheck = <never> action;
    }
    return state;
}
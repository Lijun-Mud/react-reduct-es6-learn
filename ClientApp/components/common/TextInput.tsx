﻿//// A '.tsx' file enables JSX support in the TypeScript compiler, 
//// for more information see the following page on the TypeScript wiki:
//// https://github.com/Microsoft/TypeScript/wiki/JSX

//import { PropTypes } from 'react';
//import * as React from 'react';


//interface TextInputProps extends React.Props<HTMLInputElement> {
//    name: string,
//    label: string,
//    //onChange: Function,
//    onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>,
//    placeholder: string,
//    value: string,
//    error:string,
//}

//const TextInput=({name,label,onChange,placeHolder,value,error}) => {
//    let wrapperClass = 'form-group';
//    if (error && error.length > 0) {
//        wrapperClass += " " + 'has-error';
//    }
//    return (
//        <div className={wrapperClass}>
//            <label htmlFor={name}>{label}</label>
//            <div className="field">
//                <input
//                    type="text"
//                    name={name}
//                    className="form-control"
//                    placeholder={placeHolder}
//                    value={value}
//                    onChange={onChange} />
//                {error && <div className="alert alert-danger">{error}</div>}
//               </div>
//        </div>
//    );
//}

//export default TextInput;
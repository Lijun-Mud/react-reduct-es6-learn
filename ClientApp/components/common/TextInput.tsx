﻿import * as React from 'react';


interface TextInputProps extends React.Props<HTMLInputElement> {
    name: string,
    label: string,
    onChange: (event:React.FormEvent<HTMLInputElement>)=>void,
    placeHolder: string,
    value: string,
    error:string,
}

export const TextInput: React.SFC<TextInputProps> = (props) => {
    let { name, label, onChange, placeHolder, value, error } = props;
    let wrapperClass = 'form-group';
    if(error&&error.length>0) {
        wrapperClass += ' ' + 'has-error';
    };
        return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
               </div>
        </div>
    );
};

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
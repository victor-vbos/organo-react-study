import './TextField.css'
import {useState} from "react";
const TextField = (props) => {
    const whenTyping = (event) => {
        props.valueChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyping} required={props.required} type="text" placeholder={`Type your ${props.label}`}/>
        </div>
    )
}

export default TextField
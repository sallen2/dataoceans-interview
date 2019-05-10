import React from 'react'

function Form(props) {
    return (
        <div>
            <label htmlFor="str1">First word</label>
            <input id='str1' type="text" />
            <label htmlFor="str12">Second word</label>
            <input id='str2' type="text" />
            <button onClick={props.check}>Check</button>
        </div>
    )
}

export default Form
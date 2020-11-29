import React from 'react'

export default function About1(props) {
    return (
        <div className="pageMain">
            <p>{props.pageName}</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

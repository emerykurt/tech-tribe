import React from 'react'


function Rating(props){
    return(
        <article>
                <h3>{props.rComp}</h3>
                    <details>
                        <summary>Interview Process: {props.rInt}</summary>
                        <p>{props.rIntCom}</p>
                    </details>
                    <details>
                        <summary>Technical Interview Process: {props.rTech}</summary>
                        <p>{props.rTechCom}</p>
                    </details>
                    <p>Technical Language: {props.rLang}</p>
                    <p>Benefits: {props.rBenef}</p>
                    <p>Diversity: {props.rDivers}</p>
                    <p>Mentorship: {props.rMentor}</p>
                    <details>
                        <summary>Company Culture: {props.rCult}</summary>
                        <p>{props.rCultCom}</p>
                    </details>
                    <blockquote>
                    - {props.rFName} {props.rLName}, {props.rBootCamp}<br/>
                    {props.rCity}, {props.rState}
                    </blockquote>
        </article>
    )
}
export default Rating
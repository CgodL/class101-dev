import React from 'react';
import styled from 'styled-components';

import { personalInformationObj, skillObj, projectObj } from './data';
const uuidv1 = require('uuid/v1');

const mapSkill = () => {
    let i = 0;
    let paint = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    let number: any[] | number[] = [];
    let result = []
    skillObj.map(skill => {
        number.push(skill.content)
    })

    for (let j = 0; j < number.length; j++) {
        paint = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
        while (i < number[j]) {
            paint[i] = '1'
            i++;
        }
        i = 0;
        // tslint:disable-next-line: no-increment-decrement
        result.push(paint)
    }


    return (
        <div>
            {
                skillObj.map(skill => (
                    // tslint:disable-next-line: no-unused-expression
                    <div key={uuidv1()} >
                        <Label>{skill.label}</Label>
                    </div>
                ))
            }
        </div >
    )
}

const Info: React.FC = () => {
    const aboutMe = (
        <div>
            <Head1> ABOUT ME </Head1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </div>
    )

    const mapInfo = (
        <div>
            {personalInformationObj.map(person => (
                // tslint:disable-next-line: no-unused-expression
                <div key={uuidv1()}>
                    <Label> {person.label} </Label>
                    <p>{person.content}</p>
                </div>
            ))}
        </div>
    )


    const mapProject = (
        <div>
            {
                projectObj.map(project => (
                    <div key={uuidv1()} >
                        <Label>{project.label}</Label>
                        <ul>
                            {project.content.map(information => (
                                <li>{information}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div >
    )

    return (
        <div>
            <div>
                {aboutMe}
            </div>
            <div>
                <Head>Personal Information</Head>
                {mapInfo}
            </div>
            <div>
                <Head>professional skills</Head>
                {mapSkill()}
            </div>
            <div>
                <Head>Project</Head>
                {mapProject}
            </div>
        </div>
    )
}


// CSS
const Label = styled.span`
font-weight: 900;
`

const Head = styled.div`
font-size: 25px;
`

const Head1 = styled.div`
font-size: 50px;
`

export default Info;
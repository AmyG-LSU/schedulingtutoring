"use client";
import React, {JSX, useEffect, useState} from "react";

//import Dropdown from 'react-bootstrap/Dropdown';

type DropDownProps = {
    subjects: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    subjectSel: Function;
}

const DropDown: React.FC<DropDownProps> = ({
    subjects, 
    subjectSel,
}: DropDownProps): JSX.Element => {
    const[showDropDown, setShowDropDown] = useState<boolean>(false);


    const onClickHandler = (subject: string): void =>{
        subjectSel(subject)
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {subjects.map(
                    (subject: string, index:number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    onClickHandler(subject);
                                }}
                            >
                                {subject}
                            </p>
                        );
                    }
                )}
            </div>
        </>
    )
}

export default DropDown;
"use client";
import React, {JSX, useState} from "react";
import DropDown from "./Dropdown";

const TimeDropdown: React.FC = (): JSX.Element => {
    const[showDropDown, setShowDropDown] = useState<boolean>(false);
    const[selectSubject, setSelectSubject] = useState<string>("");
    const subjects = () => {
        return ["8:00-11:00", "11:00-2:00", "2:00-5:00", "5:00-8:00"]
    };

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if(event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const subjectSel = (subject: string): void => {
        setSelectSubject(subject);
    };

    return (
        <>
            <button
                className={showDropDown ? "active" : undefined}
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }
            >
                <div>{selectSubject ? selectSubject : "Time"}</div>
                {showDropDown && (
                    <DropDown
                    subjects ={subjects()}
                    showDropDown = {false}
                    toggleDropDown={() : void => toggleDropDown()}
                    subjectSel={subjectSel}
                    />
                )
                }
            </button>
        </>
    );
};

export default TimeDropdown;
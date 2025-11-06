"use client";
import React, {JSX, useState} from "react";
import DropDown from "./Dropdown";

const LocationDropdown: React.FC = (): JSX.Element => {
    const[showDropDown, setShowDropDown] = useState<boolean>(false);
    const[selectSubject, setSelectSubject] = useState<string>("");
    const subjects = () => {
        return ["Virtual", "PFT", "Union", "Coates"]
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
                <div>{selectSubject ? selectSubject : "Location"}</div>
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

export default LocationDropdown;
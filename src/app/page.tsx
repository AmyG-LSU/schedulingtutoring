import React from 'react';
import Dropdown from "@/components/Dropdown";
import SessionTab from "@/components/SessionTab"

const Home = () => {
    return (
        <div className="flex gap-20">
            <div className="flex justify-center-safe ml-50">
                <SessionTab/>
            </div>
            <div className="flex flex-col  gap-10">
            <Dropdown Type="Courses" option={["IE","CHEM","ENG","CHEM","MATH"]} />
            <Dropdown Type="Time" option={["8 AM","9 AM", "10 AM","11 AM","12 PM","1 PM"]}/>
            <Dropdown Type="Location" option={["Patrick Taylor Hall", "LSU Main Library", "Business Complex","Coates Hall","Nichoulus Hall"]}/>

            </div>

        </div>

    );
};
export default Home;

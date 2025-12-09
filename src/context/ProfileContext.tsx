"use client";

import { createContext, useContext, useState } from "react";
import { profileSessions } from "@/data/profilesData";

const ProfileContext = createContext(null);

export function ProileProvider({ children }) {
    const [profile, setProfile] = useState(profileSessions);

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    return useContext(ProfileContext);
}

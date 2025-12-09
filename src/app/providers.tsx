"use client";

import { ProfileProvider } from "@/context/ProfileContext";

export function Providers({ children }) {
    return <ProfileProvider>{children}</ProfileProvider>;
}

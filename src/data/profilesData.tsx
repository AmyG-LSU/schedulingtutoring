
export interface profileSession {
    id: number,
    name: string,
    year: number,
    school: string,
    major: string,
    courseNums: string[],
    subjects: string[],
    tutoringIDs: number[],
    favoriteSessionsID: number[],
    favoriteTutorsID: number[]
}
export const profileSessions = {
        id: 1,
        name: "David Hallow",
        year: 3,
        school: "Louisiana State University",
        major: "Mechanical Engineering",
        courseNums: ["1550","2001","1253","2733","2060"],
        subjects: ["Communication","Physics","Math","Computer Science"],
        tutoringIDs: []
    }

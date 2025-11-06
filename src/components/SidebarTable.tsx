"use client";

interface ClassRow {
    Class: string;
    Time: string;
    Days: string;
}
interface ScheduledClasses{
    Time: string;
    Location: string

}

interface SidebarTableProps {
    data: ClassRow[] | ScheduledClasses[];
}

export default function SidebarTable({ data }: SidebarTableProps) {
    const isClassTable = "Class" in data[0];

    return (

        <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                <tr>
                    {isClassTable ?(
                        <>
                            <th className="border-b p-2 text-left">Class</th>
                            <th className="border-b p-2 text-left">Time</th>
                            <th className="border-b p-2 text-left">Days</th>
                        </>
                    ) :
                        (
                            <>
                                <th className="border-b p-2 text-left">Time</th>
                                <th className="border-b p-2 text-left">Location</th>
                            </>
                        )}

                </tr>
                </thead>
                <tbody>
                {isClassTable ? (
                    (data as ClassRow[]).map((row, idx) =>
                        (
                            <tr key={idx} className="hover: bg-gray-50">
                                <td className="p-1">{row.Class}</td>
                                <td className="p-1">{row.Time}</td>
                                <td className="p-1">{row.Days}</td>
                            </tr>
                        ))
                ):(
                    (data as ScheduledClasses[]).map((row, idx) =>
                        (
                            <tr key={idx} className="hover: bg-gray-50">
                                <td className=" p-2">{row.Time}</td>
                                <td className=" p-2">{row.Location}</td>
                            </tr>
                        ))
                    )}

                </tbody>
            </table>
        </div>
    );
}

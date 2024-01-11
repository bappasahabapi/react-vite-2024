import { tableData } from "../studentData";


/* eslint-disable react/prop-types */
function TableHead() {
  return (
    <>
      {" "}
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
    </>
  );
}

function ClassRoomName({ title }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {title}
        </td>
      </tr>
    </>
  );
}

function TableRowData({ id, name, score, percentage }) {
  return (
    <>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{id}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./images/assets/avatar.png"
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{score}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
      </tr>
    </>
  );
}

function TableBody() {


  return (
    <>
      <tbody>
        {tableData.map((classData) => (
          <>
            <ClassRoomName
              key={classData.className}
              title={`Class Name: ${classData.className}`}
            />
            {classData.students.map((student) => (
              <TableRowData
                key={student.id}
                id={student.id}
                name={student.name}
                score={student.score}
                percentage={student.percentage}
              />
            ))}
          </>
        ))}
      </tbody>
    </>
  );
}

export default function Table() {
  return (
    <>
      <table className="w-full">
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}

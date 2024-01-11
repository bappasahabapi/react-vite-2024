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
  const tableData = [
    { id: "1", name: "Bappa Saha", score: "A+", percentage: "96" },
    { id: "2", name: "Kappa Roy", score: "A", percentage: "76" },
    { id: "3", name: "Vayia Singh", score: "A-", percentage: "66" },
  ];
  return (
    <>
      <tbody>
        {/* <!-- className two --> */}
        <ClassRoomName title="Class Name: One" />
        <TableRowData id="1" name="Bappa Saha" score="A+" percentage="96" />
        <TableRowData id="2" name="Kappa Roy" score="A" percentage="76" />
        <TableRowData id="3" name="Vayia Singh" score="A-" percentage="66" />

        {/* <!-- className two --> */}
        <ClassRoomName title="Class Name: Two" />
        <TableRowData id="3" name="Raita Sharma" score="A-" percentage="66" />
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

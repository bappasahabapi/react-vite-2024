import Link from 'next/link'

const subNavs =[
  {
    RouteName:"Analytics",
    route:`/dashboard/analytics`
  },
  {
    RouteName:"Settings",
    route:`/dashboard/settings`,
  },
  {
    RouteName:"Profile-A",
    route:`/dashboard/profileA`,
  }
]

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className=" border-green-500 border ">
      <p className=" ml-5  ">Dashboard Layout SubNav</p>
        <ul className="flex gap-5 bg-purple-100 p-3">
          {subNavs.map(nav=> <li key={nav.RouteName}>
            <Link href={`${nav.route}`} className="hover:text-green-600 hover:font-bold">
            {nav.RouteName}
            </Link>
          </li>)}
        </ul>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;

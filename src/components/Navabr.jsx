import Logo from "./Logo";

export default function Navabr() {
  return (
    <>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <Logo/>
          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </>
  );
}

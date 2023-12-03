"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
const SiteNavbar = () => {
  const pathName =usePathname()

  return (
    <div className="my-text  ">
      <div className=" border-b-1 ">
        <div className="max-w-7xl md:flex px-8 justify-between mx-auto h-16 align-middle items-center">
          <h1 className=""><span className="text-black text-xl font-bold"> Design</span><span className="text-xl font-bold text-orange-500">AGENCY</span></h1>
          <nav className=" ">
            <ul className="flex gap-[30px] ">
              <li>
                <Link href="/" className={pathName==="/"?"activeItem":"unActive"}>
                  <span className="text-[16px] font-medium">Start</span>
                </Link>
              </li>
              <li>
                <Link href="/site/team" className={pathName==="/site/team"?"activeItem":"unActive"}>
                  <span className="text-[16px] font-medium">Team</span>
                </Link>
              </li>
              <li>
                <Link href="/site/service" className={pathName==="/site/service"?"activeItem":"unActive"}>
                  <span className="text-[16px] font-medium">Service</span>
                </Link>
              </li>
              <li>
                <Link href="/site/project" className={pathName==="/site/project"?"activeItem":"unActive"}>
                  <span className="text-[16px] font-medium">Project</span>
                </Link>
              </li>
              <li>
                <Link href="/site/testimonials" className={pathName==="/site/testimonials"?"activeItem":"unActive"}>
                  <span className="text-[16px] font-medium">Testimonial</span>
                </Link>
              </li>
              <button className="btn-1 py-[5px] px-3  ">Login </button><button className="btn-2 py-[5px] px-3 ">Registration</button>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default SiteNavbar;

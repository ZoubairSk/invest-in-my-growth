import Image from "next/image";
import logo from "@/public/assets/Logo/Group 5140373.svg";
export default function Navigation() {
  return (
    <div className="items-center flex justify-between w-full h-20  ">
      <div>
        <Image alt="logo" width={53} height={25} src={logo} />
      </div>
      <div>
        <nav>
          <ul className="flex items-center font-medium text-sm">
            <li className="mx-4">Home</li>
            <li className="mx-4">About Us</li>
            <li className="mx-4">How it Works</li>
            <li className="mx-4">Demo</li>
            <li className="mx-4">Contact Us</li>
            <li className="mx-4 rounded-full bg-blue px-8 py-2 text-white">
              Sign Up
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

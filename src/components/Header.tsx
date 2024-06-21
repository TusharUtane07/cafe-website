import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Header = () => {

    const[nav, setNav] = useState<boolean>(false);

    return (
      <div>
        <div className="">
			<div className=" h-16 flex border-b-2 border-black items-center justify-between font-be md:h-16 lg:hidden">
				<div className="text-2xl ml-4 md:text-3xl md:ml-5">
					<span className="font-bold">Three Beans</span>
				</div>

				<div className="mr-4 md:mr-5">
					<GiHamburgerMenu
						onClick={() => setNav(!nav)}
						className="cursor-pointer text-3xl md:text-4xl"
					/>
				</div>

				<div
					className={
						nav
							? "fixed top-0 left-0 w-screen h-screen bg-white text-black z-10 duration-700"
							: "fixed top-0 left-[-100%] w-[100px] h-screen bg-white z-10 duration-700"
					}>
					<RxCross1
						onClick={() => setNav(!nav)}
						size={30}
						className="absolute right-3 top-5 cursor-pointer md:right-10 md:top-7 "
					/>
					<div className="text-2xl ml-3 mt-5 md:text-4xl md:ml-5 md:mt-5">
						<span className="font-bold">Three Beans</span>
					</div>
					<div className="text-center mt-16 text-3xl md:text-5xl md:mt-14">						
						<div className="mt-10  md:mt-14">
							<NavLink
								to="/"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Home
							</NavLink>
						</div>
						<div className="mt-10  md:mt-14">
							<NavLink
								to="/menu"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Menu
							</NavLink>
						</div>
						<div className="mt-10 md:mt-14">
							<NavLink
								to="/gallery"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Gallery
							</NavLink>
						</div>
						<div className="mt-10 md:mt-14">
							<NavLink
								to="/about"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								About us
							</NavLink>
						</div>
						<div className="mt-10 md:mt-14">
							<NavLink
								to="/contact"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Contact us
							</NavLink>
						</div>
						<div className="mt-10 md:mt-14">
							<NavLink
								to="/book-table"
								onClick={() => setNav(!nav)}
								className={({ isActive }) =>
									isActive ? " font-bold bg-orange-400 px-4 py-2 rounded-md text-black" : "bg-orange-400 text-black px-4 py-2 rounded-md"
								}>
								Reserve Table
							</NavLink>
						</div>
					</div>
				</div>
			</div>
			{/* Desktop View */}
			<div className="hidden lg:flex h-20 border-b-2 border-black">
				<div className="w-full flex items-center justify-between">
					<div className="text-4xl  ml-7 font-bold">Three Beans</div>
					<div className="flex items-center text-2xl mr-5 space-x-7 font-semiboldbold">						
						<div>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Home
							</NavLink>
						</div>
						<div>
							<NavLink
								to="/menu"
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Menu
							</NavLink>
						</div>
						<div>
							<NavLink
								to="/gallery"
								className={({ isActive }) =>
									isActive ? " font-bold" : ""
								}>
								Gallery
							</NavLink>
						</div>
						<div className="">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive
										? " font-bold flex items-center"
										: "flex items-center"
								}>
								About us
							</NavLink>
						</div>
						<div className="">
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive
										? " font-bold flex items-center"
										: "flex items-center"
								}>
								Contact us
							</NavLink>
						</div>
						<div className="">
							<NavLink
								to="/book-table"
								className={({ isActive }) =>
									isActive
										? " font-bold flex items-center bg-orange-400 text-black px-4 py-2 rounded-md"
										: "flex items-center bg-orange-400 text-black px-4 py-2 rounded-md"
								}>
								Reserve Table
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
      </div>
    )
  }
  
  export default Header
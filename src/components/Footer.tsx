import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<nav className="grid grid-flow-col gap-4">
				<NavLink to={"/"} className="link link-hover text-xs md:text-lg">Home</NavLink>
				<NavLink to={"/menu"} className="link link-hover text-xs md:text-lg">Menu</NavLink>
				<NavLink to={"/gallery"} className="link link-hover text-xs md:text-lg">Gallery</NavLink>
				<NavLink to={"/about"} className="link link-hover text-xs md:text-lg">About Us</NavLink>
				<NavLink to={"/contact"} className="link link-hover text-xs md:text-lg">Contact Us</NavLink>
				<NavLink to={"/book-table"} className="link link-hover text-xs md:text-lg">Reserve Table</NavLink>
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4 text-3xl">
					<div>
						<FaFacebook />
					</div>
					<div>
						<FaYoutube />
					</div>
					<div>
						<FaTwitter />
					</div>
					<div>
						<FaInstagram />
					</div>
					<div>
						<SiZomato />
					</div>
					<div>
						<SiSwiggy />
					</div>
				</div>
			</nav>
			<aside>
				<p>
					Copyright © 2024 - All right reserved by{" "}
					<a href="https://www.tusharutane.com" target="_blank">
						Tushar Utane
					</a>
				</p>
			</aside>
		</footer>
	);
};

export default Footer;

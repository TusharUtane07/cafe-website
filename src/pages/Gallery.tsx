import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery1.jpg";
import { FC } from "react";

const Gallery:FC = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="grid m-5 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery1} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery2} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery3} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery4} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery5} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery6} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery7} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery8} alt="" />
				</div>
				<div>
					<img className="w-96 h-80 rounded-md" src={gallery3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;

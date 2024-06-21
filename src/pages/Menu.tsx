import b1 from "../assets/1.png";
import b2 from "../assets/2.png";
import b3 from "../assets/3.png";

const Menu = () => {
	const burger = [
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b2,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b3,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
		{
			title: "burger dash 1 to 3",
			img: b1,
			price: 399,
		},
	];

	return (
		<div>

        <div>
        <h1 className="text-center capitalize text-3xl font-semibold md:text-4xl md:my-6 lg:text-5xl lg:my-12">
      What we serve
			</h1>
        </div>
			<div className="grid md:grid-cols-2 mx-8 lg:grid-cols-3 gap-4 m-5">
				{burger.map((item, index) => {
					return (
						<div key={index} className="border border-gray-600 p-4 rounded-md">
							<div>
                <img src={item.img} alt=""  className="mx-auto h-60 w-60"/>
              </div>
              <div className="flex items-center justify-between capitalize mt-2">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="bg-orange-400 text-black font-bold rounded-md px-4 w-16 py-1">{item.price}</p>
              </div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;

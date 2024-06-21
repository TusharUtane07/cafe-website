import { FC } from "react";

const About:FC = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col  justify-between gap-8">
            <div className="w-full lg:w-3/4 mx-auto  flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
                <p className="font-normal text-base leading-6 text-gray-400 ">Welcome to Three Bean Coffee Shop, your cozy haven for the finest coffee, delicious dishes, and delightful snacks. Nestled in the heart of Nagpur, our café is a sanctuary for coffee lovers and food enthusiasts alike. At Three Bean, we pride ourselves on our authentic approach to coffee-making, using only the highest quality beans sourced from sustainable farms around the world. Each cup of coffee is meticulously brewed to perfection, ensuring a rich, aromatic experience that will awaken your senses and leave you craving more. But we are more than just a coffee shop. Our menu boasts a variety of amazing dishes, from hearty breakfast options to satisfying lunch and dinner plates. Whether you’re in the mood for a classic avocado toast, a flavorful sandwich, or a fresh and vibrant salad, we have something to please every palate.</p>
            </div>
            <div className=" lg:mx-40 ">
                <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
            </div>
        </div>

        <div className="flex  flex-col justify-center w-full gap-8 pt-12">
            <div className="lg:w-3/4 mx-auto flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Our Story</h1>
                <p className="font-normal text-base leading-6 text-gray-400 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full  lg:pt-8 lg:flex lg:justify-center ">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                        <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                        <p className="font-medium text-xl leading-5 text-gray-400 mt-4">Alexa</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                        <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                        <p className="font-medium text-xl leading-5 text-gray-400 mt-4">Olivia</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                        <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                        <p className="font-medium text-xl leading-5 text-gray-400 mt-4">Liam</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                        <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                        <p className="font-medium text-xl leading-5 text-gray-400 mt-4">Elijah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
  }
  
  export default About
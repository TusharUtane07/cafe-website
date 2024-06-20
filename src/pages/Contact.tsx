import email from "../assets/email.png";
import call from "../assets/callus.png";
import map from "../assets/map.png";

const Contact = () => {
	return (
		<div className="m-3">
			<h1 className="text-center text-3xl font-semibold md:text-4xl md:my-6 lg:text-5xl lg:my-12">
				Visit Us
			</h1>
			<div className="relative w-full h-96 mt-3">
				<iframe
					className="absolute top-0 left-0 w-full h-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1707988224643!2d79.0608617091272!3d21.145600080451953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c05f97510f2d%3A0x7c496feeca95b250!2sThree%20Beans%20Coffee%20Bar%2C%20Dharampeth!5e0!3m2!1sen!2sin!4v1718894180176!5m2!1sen!2sin"
					aria-hidden="false"
					tabIndex={0}></iframe>
			</div>
			<div>
				<h1 className="text-center text-3xl my-5 font-semibold md:text-4xl md:my-6 lg:text-5xl lg:my-12">
					Contact Information
				</h1>
				<div className="md:flex  justify-center md:my-10">
					<div className="text-center mt-6 border md:w-60 bg-white text-black border-white p-3 mx-4 rounded-md">
						<img src={email} className="w-20 mx-auto" alt="" />
						<p className="mt-4">info@threebean.com</p>
						<p>contact@threebean.com</p>
					</div>
					<div className="text-center md:w-60 mt-6 border bg-white text-black border-white p-3 mx-4 rounded-md">
						<img src={call} className="w-20 mx-auto" alt="" />
						<p className="mt-4">+91 7387927556</p>
						<p>+91 8783599249</p>
					</div>
					<div className="text-center md:w-60 bg-white text-black mt-6 border border-white p-3 mx-4 rounded-md">
						<img src={map} className="w-20 mx-auto" alt="" />
						<p className="mt-4">Dharampeth, Nagpur</p>
            <p>Follow above map</p>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center text-3xl my-5 font-semibold md:text-4xl md:my-6 lg:text-5xl lg:my-12">
					Write us a message
				</h1>
				<form className="mt-4 lg:mt-6 border border-white p-3 rounded-md md:m-10 lg:mx-40 lg:p-8">
					<div>
						<label htmlFor="name" className="text-lg">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full pl-4  border border-white outline-none mt-2 text-lg h-10 rounded-md p-1"
							placeholder="Tanmay Singh"
						/>
					</div>
					<div className="mt-4 lg:mt-6">
						<label htmlFor="number" className="text-lg">
							Phone Number
						</label>
						<input
							type="number"
							id="number"
							className="w-full pl-4  border text-black border-white outline-none mt-2 text-lg h-10 rounded-md p-1"
							placeholder="7387927556"
						/>
					</div>
					<div className="mt-4 lg:mt-6">
						<label htmlFor="message" className="text-lg">
							Message
						</label>
						<textarea
							rows={3}
							className="w-full pl-4  border text-black border-white outline-none mt-2 text-lg  rounded-md p-1"
							placeholder="Write us a Message, We will happy to help you out."
						/>
					</div>
					<div className="mt-6 text-center md:text-start">
						<button className="text-xl bg-orange-400 text-black w-full py-2 rounded-md md:w-40  font-semibold">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;

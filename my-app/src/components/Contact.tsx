import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Contact() { 
	return (
		<div className="flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8">
			<div className="flex items-center justify-center flex-col gap-4 sm:gap-5 max-w-4xl mx-auto">
				<div className="text-[#757575] text-sm sm:text-base">GET IN TOUCH</div>
				<div className="text-white text-3xl sm:text-4xl lg:text-5xl text-center px-4">Let's Create Something Together</div>
				<div className="text-[#757575] max-w-lg text-center text-sm sm:text-base px-4">Have a project in mind? Let's bring your idea to life. I'm currently 
					available for freelance projects and collaboration
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
				{/* Left side: contact info */}
				<div className="flex-1 space-y-4 sm:space-y-6">
					{/* Email box */}
					<div className="border border-[#ee4848] rounded-xl p-4 sm:p-6 text-white">
						<div className="flex items-center gap-3">
							<div className="bg-[#ee4848]/10 p-2 rounded-lg">
								<LuMail className="w-5 h-5 sm:w-6 sm:h-6 text-[#ee4848]" />
							</div>
							<div>
								<div className="text-xs sm:text-sm text-gray-400">Email</div>
								<div className="font-semibold text-sm sm:text-base">oa_geunat@esi.dz</div>
							</div>
						</div>
						<div className="text-gray-400 text-xs sm:text-sm mt-3">Response within 24 hours</div>
					</div>

					{/* Socials */}
					<div className="text-white font-semibold text-sm sm:text-base">Contact with Me</div>
					<div className="flex flex-wrap gap-2 sm:gap-3">
						<a href="#" className="flex items-center gap-2 border border-[#ee4848] rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-white hover:bg-[#ee4848]/10 text-sm">
							<FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
							<span>GitHub</span>
						</a>
						<a href="#" className="flex items-center gap-2 border border-[#ee4848] rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-white hover:bg-[#ee4848]/10 text-sm">
							<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
							<span>LinkedIn</span>
						</a>
						<a href="#" className="flex items-center gap-2 border border-[#ee4848] rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-white hover:bg-[#ee4848]/10 text-sm">
							<FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
							<span>Instagram</span>
						</a>
						<a href="#" className="flex items-center gap-2 border border-[#ee4848] rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-white hover:bg-[#ee4848]/10 text-sm">
							<FaDiscord className="w-4 h-4 sm:w-5 sm:h-5" />
							<span>Discord</span>
						</a>
					</div>
				</div>

				{/* Right side: form */}
				<div className="flex-1">
					<form className="space-y-3 sm:space-y-4 text-white">
						<div>
							<label className="block text-xs sm:text-sm text-gray-300 mb-1">Name</label>
							<input type="text" placeholder="Your name" className="w-full bg-transparent border border-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/60 text-sm sm:text-base" />
						</div>
						<div>
							<label className="block text-xs sm:text-sm text-gray-300 mb-1">Email</label>
							<input type="email" placeholder="you@example.com" className="w-full bg-transparent border border-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/60 text-sm sm:text-base" />
						</div>
						<div>
							<label className="block text-xs sm:text-sm text-gray-300 mb-1">Message</label>
							<textarea rows={5} placeholder="Write your message..." className="w-full bg-transparent border border-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/60 text-sm sm:text-base"></textarea>
						</div>
						<button type="button" className="bg-[#ee4848] hover:bg-[#ff6b6b] text-white rounded-md px-4 py-2 text-sm sm:text-base">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
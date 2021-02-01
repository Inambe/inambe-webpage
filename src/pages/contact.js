import React from "react"
import { FaGithub, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa"

import Input from "../components/form/input"
import FormControl from "../components/form/formControl"
import Label from "../components/form/label"
import Button from "../components/button"
import A from "../components/a"
import LayoutRoot from "../layouts/root"
import MainLayout from "../layouts/main"
import constants from "../constants"
import SEO from "../components/seo"
import Heading from "../components/heading"

const ContactItem = ({ Icon, ...props }) => {
	return (
		<div className="flex items-center">
			<Icon />
			&nbsp;
			<A eLink {...props}></A>
		</div>
	)
}
const SocialItem = props => {
	return (
		<span className="inline-block mr-2">
			<A eLink newTab className="text-2xl" {...props} />
		</span>
	)
}

function ContactPage() {
	return (
		<LayoutRoot>
			<SEO title="Contact" description="Contact Inam Ul Haq" />
			<MainLayout>
				<Heading>Contact</Heading>
				<div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
					<div className="w-full space-y-3 md:w-6/12">
						<p>
							If you have any question for me or just wanna say
							hello, use the form below.
						</p>
						<form
							method="post"
							name="contact-form"
							data-netlify="true"
						>
							{/* for netlify */}
							<input
								type="hidden"
								name="form-name"
								value="contact-form"
							/>
							<FormControl>
								<Label>Your name</Label>
								<Input name="name" />
							</FormControl>
							<FormControl>
								<Label>Your email*</Label>
								<Input name="email" type="email" required />
							</FormControl>
							<FormControl>
								<Label>Message*</Label>
								<Input name="message" textarea required />
							</FormControl>
							<FormControl>
								<Button type="primary" size="m">
									Send
								</Button>
							</FormControl>
						</form>
					</div>
					<div className="w-full space-y-3 md:w-5/12 md:ml-auto">
						<p>Some other ways you can contact me.</p>
						<div className="space-y-1">
							<ContactItem
								Icon={FaEnvelope}
								href={`mailto:${constants.EMAIL}`}
							>
								{constants.EMAIL}
							</ContactItem>
							<ContactItem
								Icon={FaPhone}
								href={`tel:${constants.PHONE}`}
							>
								{constants.PHONE}
							</ContactItem>
						</div>
						<div>
							<SocialItem href={constants.URL.GITHUB}>
								<FaGithub />
							</SocialItem>
							<SocialItem href={constants.URL.TWITTER}>
								<FaTwitter />
							</SocialItem>
						</div>
					</div>
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}

export default ContactPage

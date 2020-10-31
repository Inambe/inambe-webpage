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
		<p className="flex items-center mb-1">
			<Icon />
			&nbsp;
			<A eLink {...props}></A>
		</p>
	)
}
const SocialItem = props => {
	return (
		<A
			eLink
			newTab
			className="inline-block mr-2 text-2xl hover:text-primary"
			{...props}
		/>
	)
}

function ContactPage() {
	return (
		<LayoutRoot>
			<SEO title="Contact" description="Contact Inam Ul Huq" />
			<MainLayout>
				<Heading>Contact</Heading>
				<div className="flex flex-col md:flex-row">
					<div className="w-full mb-5 md:w-6/12">
						<p className="mb-2">
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
								<Input name="name" block />
							</FormControl>
							<FormControl>
								<Label>Your email*</Label>
								<Input
									name="email"
									type="email"
									required
									block
								/>
							</FormControl>
							<FormControl>
								<Label>Message*</Label>
								<Input name="message" textarea required block />
							</FormControl>
							<FormControl>
								<Button type="primary" size="m">
									Send
								</Button>
							</FormControl>
						</form>
					</div>
					<div className="w-full mb-5 md:w-4/12 md:ml-auto">
						<p className="mb-2">
							Some other ways you can contact me.
						</p>
						<div className="mb-3">
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
						<p className="mb-3">
							<SocialItem href={constants.URL.GITHUB}>
								<FaGithub />
							</SocialItem>
							<SocialItem href={constants.URL.TWITTER}>
								<FaTwitter />
							</SocialItem>
						</p>
					</div>
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}

export default ContactPage

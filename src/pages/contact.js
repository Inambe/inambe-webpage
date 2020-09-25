import React from "react"
import { FaGithub, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa"
import { Row, Col } from "react-grid-system"
import "./contactPage.css"

import Input from "../components/form/input"
import FormControl from "../components/form/formControl"
import Label from "../components/form/label"
import Button from "../components/button"
import A from "../components/a"
import LayoutRoot from "../layouts/root"
import MainLayout from "../layouts/main"
import constants from "../constants"

function ContactPage() {
	return (
		<LayoutRoot>
			<MainLayout>
				<main className="contactPage">
					<h1>Contact</h1>
					<Row>
						<Col md={5} className="contactPage__section">
							<p>
								If you have any question for me or just wanna
								say hello, use the form below.
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
									<Input
										name="message"
										textarea
										required
										block
									/>
								</FormControl>
								<FormControl>
									<Button type="primary" size="m">
										Send
									</Button>
								</FormControl>
							</form>
						</Col>
						<Col
							md={5}
							offset={{ md: 2 }}
							className="contactPage__section contactInfo"
						>
							<p>Some other ways you can contact me.</p>
							<p className="contactInfo__item">
								<FaEnvelope />{" "}
								<A eLink href={`mailto:${constants.EMAIL}`}>
									{constants.EMAIL}
								</A>
							</p>
							<p className="contactInfo__item">
								<FaPhone /> {constants.PHONE}
							</p>
							<p className="socialIcons">
								<A eLink newTab href={constants.URL.GITHUB}>
									<FaGithub />
								</A>
								<A eLink newTab href={constants.URL.TWITTER}>
									<FaTwitter />
								</A>
							</p>
						</Col>
					</Row>
				</main>
			</MainLayout>
		</LayoutRoot>
	)
}

export default ContactPage

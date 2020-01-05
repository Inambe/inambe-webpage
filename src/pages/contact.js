import React from "react";
import {
	FaGithub,
	FaEnvelope,
	FaPhone,
	FaTwitter,
	FaLinkedin
} from "react-icons/fa";
import { Row, Col } from "react-grid-system";
import "./contact.css";

import Input from "../components/form/input";
import FormControl from "../components/form/formControl";
import Label from "../components/form/label";
import Button from "../components/button";
import A from "./../components/a";

function Contact() {
	return (
		<div className="contactPage">
			<h1>Contact</h1>
			<Row nogutter>
				<Col md={5} className="contactPage__section">
					<p>
						If you have any question for me or just wanna say hello,
						use the below form.
					</p>
					<form method="post" name="contact-form">
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
				</Col>
				<Col
					md={5}
					offset={{ md: 2 }}
					className="contactPage__section contactInfo"
				>
					<p>Some other ways you can contact me.</p>
					<p className="contactInfo__item">
						<FaEnvelope />{" "}
						<A href="mailto:inambe.dev@gmail.com">
							inambe.dev@gmail.com
						</A>
					</p>
					<p className="contactInfo__item">
						<FaPhone /> +92 340 4678646
					</p>
					<p className="socialIcons">
						<A href="https://github.com/inambe" target="_blank">
							<FaGithub />
						</A>
						<A href="#" target="_blank">
							<FaTwitter />
						</A>
						<A
							href="https://www.linkedin.com/in/inambe"
							target="_blank"
						>
							<FaLinkedin />
						</A>
					</p>
				</Col>
			</Row>
		</div>
	);
}

export default Contact;

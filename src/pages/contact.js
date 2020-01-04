import React from "react";
import "./contact.css";

import Input from "../components/form/input";
import FormControl from "../components/form/formControl";
import Label from "../components/form/label";
import Button from "../components/button";

function Contact() {
	return (
		<div className="contact">
			<form method="post" name="contact-form">
				{/* for netlify */}
				<input type="hidden" name="form-name" value="contact-form" />

				<h1>Contact</h1>
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
	);
}

export default Contact;

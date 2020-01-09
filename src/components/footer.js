import React from "react";
import "./footer.css";

import A from "./a";

function Footer() {
	return (
		<footer className="footer">
			<p>
				Website code available at{" "}
				<A href="https://github.com/Inambe/inambe-webpage" newTab>
					Github
				</A>
			</p>
		</footer>
	);
}

export default Footer;

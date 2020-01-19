const db = require("./db");
const uses = require("./uses");

const projects = db.projects;

class Projects {
	static all() {
		return projects.map(p => {
			p.uses = p.uses.map(u => uses.getById(u));
			return p;
		});
	}
}
module.exports = Projects;

import db from "./db";
import uses from "./uses";

const projects = db.projects;

class Projects {
	static all() {
		return projects.map(p => {
			p.uses = p.uses.map(u => uses.getById(u));
			return p;
		});
	}
}
export default Projects;

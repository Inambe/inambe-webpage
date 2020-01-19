import { find } from "lodash";

import db from "./db";

const uses = db.uses;

class Uses {
	static all() {
		return uses;
	}
	static getById(id) {
		return find(uses, u => u.id == id);
	}
}
export default Uses;

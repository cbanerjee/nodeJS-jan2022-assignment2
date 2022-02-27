module.exports = class Employee {
    constructor (id, time, name, projectid) {
        this.id = id;
        this.createdAt = time;
        this.name = name;
        this.project_id = projectid;
    }
}
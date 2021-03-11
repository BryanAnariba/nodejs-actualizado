import { connect } from '../database/Conection';

class User {

    public async getUsers () {
        const connection = await connect();
        try {
            const users = await connection.query('SELECT User.userId, User.roleId, Role.role, User.departmentId, Department.department, User.firstName, User.lastName, User.emailUser, User.salary FROM User INNER JOIN Role ON (User.roleId = Role.roleId) INNER JOIN Department ON (User.departmentId = Department.departmentId);');
            return {
                status: 200,
                data: users
            };
        } catch (error) {
            return {
                status: 400,
                data: error
            };
        }
    }
}

export default User;
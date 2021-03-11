"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conection_1 = require("../database/Conection");
class User {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield Conection_1.connect();
            try {
                const users = yield connection.query('SELECT User.userId, User.roleId, Role.role, User.departmentId, Department.department, User.firstName, User.lastName, User.emailUser, User.salary FROM User INNER JOIN Role ON (User.roleId = Role.roleId) INNER JOIN Department ON (User.departmentId = Department.departmentId);');
                return {
                    status: 200,
                    data: users
                };
            }
            catch (error) {
                return {
                    status: 400,
                    data: error
                };
            }
        });
    }
}
exports.default = User;
//# sourceMappingURL=User.Model.js.map
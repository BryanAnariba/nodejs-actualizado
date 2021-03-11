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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const User_Model_1 = __importDefault(require("../models/User.Model"));
const user = new User_Model_1.default();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user.getUsers();
    return res.json(data);
});
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { userId } = req.params;
    res.json({
        data: 'get usuario',
        userId: userId
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { firstName, age } = req.body;
    res.json({
        msg: 'data user',
        firstName: firstName,
        age: age
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { userId } = req.params;
    const { firstName, age } = req.body;
    res.json({
        msg: 'data user',
        id: userId,
        firstName: firstName,
        age: age
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { userId } = req.params;
    res.json({
        data: 'delete usuario',
        userId: userId
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=User.Controller.js.map
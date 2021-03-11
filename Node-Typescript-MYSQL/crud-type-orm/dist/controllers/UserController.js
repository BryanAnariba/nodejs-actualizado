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
exports.deleteUser = exports.updateUser = exports.getUser = exports.addUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm"); // Para traernos la tabla
const User_1 = require("../entity/User");
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userdata = yield typeorm_1.getRepository(User_1.User).find();
    return res.status(200).json(userdata);
});
exports.addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield typeorm_1.getRepository(User_1.User).create(req.body);
    let success = yield typeorm_1.getRepository(User_1.User).save(user);
    res.status(200).send({
        status: true,
        message: 'Usuario ' + req.params.firstName + ' creado con exito',
        data: success
    });
    res.end();
});
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield typeorm_1.getRepository(User_1.User).findOne(req.params.id);
    res.status(200).send(user);
    res.end();
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId } = req.params;
    let user = yield typeorm_1.getRepository(User_1.User).findOne(userId);
    if (user) {
        // Merge remplaaza los datos update en resumen
        typeorm_1.getRepository(User_1.User).merge(user, req.body);
        // Luego guardo
        let results = yield typeorm_1.getRepository(User_1.User).save(user);
        // Envio respuesta
        res.status(200).send({
            status: true,
            message: 'Usuario con el id ' + userId + ' actualizado con exito',
            data: results
        });
        res.end();
    }
    else {
        res.status(400).send({
            status: false,
            message: 'Usuario no encontrado'
        });
        res.end();
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    let success = yield typeorm_1.getRepository(User_1.User).delete(userId);
    res.status(200).send({
        status: true,
        message: 'Usuario con el id ' + userId + ' eliminado con exito',
        success: success
    });
    res.end();
});

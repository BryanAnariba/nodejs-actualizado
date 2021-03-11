"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_Controller_1 = require("../Controllers/User.Controller");
const router = express_1.Router();
router.get('/', User_Controller_1.getUsers);
router.get('/:userId', User_Controller_1.getUser);
router.post('/', User_Controller_1.postUser);
router.put('/:userId', User_Controller_1.putUser);
router.delete('/:userId', User_Controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=User.Routes.js.map
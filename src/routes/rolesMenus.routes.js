const express = require('express');
const router = express.Router();

const RolMenuController = require('../controllers/rolesMenus.controller');

router.get('/', RolMenuController.getListRolMenu);
router.get('/:id', RolMenuController.getRolMenuById);
router.post('/', RolMenuController.createRolMenu);
router.put('/:id', RolMenuController.updateRolMenu);
router.delete('/:id', RolMenuController.removeRolMenu);


module.exports = router;
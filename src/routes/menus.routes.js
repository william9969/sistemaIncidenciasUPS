const express = require('express');
const router = express.Router();

const MenuController = require('../controllers/menus.controller');

router.get('/', MenuController.getListMenu);
router.get('/:id', MenuController.getMenuById);
router.post('/', MenuController.createMenu);
router.put('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.removeMenu);


module.exports = router;
const express = require('express');
const createFunctions = require('./DataAccessLayer/createFunctions');
const readFunctions = require('./DataAccessLayer/readFunctions');
const updateFunctions = require('./DataAccessLayer/updateFunctions');
const deleteFunctions = require('./DataAccessLayer/deleteFunctions');

const router = express.Router();

router.get('/', readFunctions.getAll);

router.get('/:id', readFunctions.getById);

router.post('/', createFunctions.createPost);

router.delete('/:id', deleteFunctions.deleteById);

router.patch('/:id', updateFunctions.updateById);

module.exports = router;
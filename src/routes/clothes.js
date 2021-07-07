'use strict';

const express = require('express');
const Interface = require('../models/clothesInterface');
const clothes = new Interface();

let router = express.Router();

router.get('/', readClothes);
router.get('/:id', readClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

// Functions 

async function readClothes(req, res, next) {
  try {
    let id= req.params.id;
    let resObj = await clothes.read(id);
    res.json(resObj.rows);
  }catch (error){
    next(error);
  }
}

async function createClothes(req, res, next) {
  try {
    let clothesObj = req.body;
    let resObj = await clothes.create(clothesObj);
    res.json(resObj.rows[0]);
  }catch (error){
    next(error);
  }
}

async function updateClothes(req, res, next) {
  try {
    let clothesObj = req.body;
    let id = req.params.id;
    let resObj = await clothes.update(id,clothesObj);
    res.json(resObj.rows[0]);
  }catch (error){
    next(error);
  }
}

async function deleteClothes(req, res, next) {
  try {
    let id = req.params.id;
    let resObj = await clothes.delete(id);
    res.json(resObj.rows[0]);
  }catch (error){
    next(error);
  }
}

module.exports = router;

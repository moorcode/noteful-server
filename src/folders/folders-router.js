const express = require('express');
const jsonParser = express.json();
const path = require('path');
const xss = require('xss');
const FoldersService = require('./folders-service');
const foldersRouter = express.Router();

const serializeFolder = folder => ({
  id: folder.id,
  folder_name: xss(folder.folder_name)
});

foldersRouter
  .route('/')
  .get((req, res, next) => {
    const db = req.app.get('db');
    FoldersService.getAllFolders(db)
      .then(folders => {
        return res.status(200).json(folders.map(serializeFolder));
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const db = req.app.get('db');
    const { folder_name } = req.body;
    const newFolder = { folder_name };
    if (!folder_name) {
      return res.status(400).json({
        error: { message: `Missing folder name in request body` }
      });
    }
    FoldersService.insertFolder(db, newFolder)
      .then(folder => {
        res.status(201).json(serializeFolder(folder));
      })
      .catch(next);
  });

foldersRouter
  .route('/:folder_id')
  .all((req, res, next) => {
    const db = req.app.get('db');
    const id = req.params.folder_id;
    FoldersService.getById(db, id)
      .then(folder => {
        if (!folder) {
          return res.status(404).json({
            error: { message: `Folder not found` }
          });
        }
        res.folder = folder;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.status(200).json(serializeFolder(res.folder));
  })
  .delete((req, res, next) => {
    const db = req.app.get('db');
    const id = req.params.folder_id;
    FoldersService.deleteFolder(db, id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = foldersRouter;
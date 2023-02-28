import express from 'express'
import {
  createFolder,
  getAllFolders,
  deleteFolder,
} from '../controllers/folderController.js'
const router = express.Router()

// @route /api/folders
router.route('/').get(getAllFolders).post(createFolder)
router.route('/:id').delete(deleteFolder)

export default router

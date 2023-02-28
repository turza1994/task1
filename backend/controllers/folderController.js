import Folder from '../models/folderModel.js'

// Get all folders
export const getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.find()
    res.json(folders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create folder
export const createFolder = async (req, res) => {
  const folder = new Folder({
    name: req.body.name,
    parentId: req.body.parentId,
  })

  try {
    const newFolder = await folder.save()
    res.status(201).json(newFolder)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete folder by ID
export const deleteFolder = async (req, res) => {
  const id = req.params.id

  try {
    const folder = await Folder.findById(id)
    if (!folder) {
      res.status(404).json({ message: 'Folder not found' })
    } else if (folder.parentId === null) {
      res.status(400).json({ message: 'Cannot delete root folder' })
    } else {
      await Folder.deleteOne({ _id: id })
      res.json({ message: 'Folder deleted' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

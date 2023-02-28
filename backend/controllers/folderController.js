import Folder from '../models/folderModel.js'

// Get all folders
export const getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.find().populate('parent children')
    res.json(folders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create folder
export const createFolder = async (req, res) => {
  const name = req.body.name
  const parent = !req.body.parent ? '63fcc34c0b2640742f8366fa' : req.body.parent
  const folder = new Folder({ name, parent })

  try {
    await folder.save()

    // If parent is specified, add the new folder to its children array
    if (parent) {
      const parentFolder = await Folder.findById(parent)
      parentFolder.children.push(folder._id)
      await parentFolder.save()
    }

    res.status(201).json(folder)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// Delete folder by ID
export const deleteFolder = async (req, res) => {
  const { id } = req.params

  try {
    const folder = await Folder.findById(id)

    if (!folder) {
      return res.status(404).json({ message: 'Folder not found' })
    }

    // Prevent Root folder from being deleted
    if (folder.name === 'Root') {
      return res.status(400).json({ message: 'Cannot delete Root folder' })
    }

    // If folder has parent, remove its ID from parent's children array
    if (folder.parent) {
      const parentFolder = await Folder.findById(folder.parent)
      parentFolder.children = parentFolder.children.filter(
        (child) => child.toString() !== id
      )
      await parentFolder.save()
    }

    await folder.delete()

    res.status(200).json({ message: 'Folder deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

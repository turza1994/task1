import mongoose from 'mongoose'

const folderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder',
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Folder = mongoose.model('Folder', folderSchema)

export default Folder

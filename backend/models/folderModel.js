import mongoose from 'mongoose'

const folderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Folder',
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Folder = mongoose.model('Folder', folderSchema)

export default Folder

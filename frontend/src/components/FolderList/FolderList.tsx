import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FolderList = ({ folder }: any) => {
  console.log(folder)

  const handleFolder = (id: any) => {
    const { data }: any = axios.get(`http://localhost:5000/api/folders/${id}`)
    console.log(data)
    return (
      <li>
        {data?.name}
        {data?.children?.map((id: any) => handleFolder(id))}
      </li>
    )
  }

  return (
    <ul>
      <li>
        {folder.name}
        {folder.children &&
          folder.children.length > 0 &&
          folder.children.map((id: any) => handleFolder(id))}
      </li>
    </ul>
  )
}

export default FolderList

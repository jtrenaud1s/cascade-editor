import React, { createContext, useState } from 'react'
//import { MajorAsset } from '../types'

interface EditorContextContent {
    editorContents: string,
    setEditorContents: React.Dispatch<React.SetStateAction<string>>,
    assetType: string,
    setAssetType: React.Dispatch<React.SetStateAction<string>>
}

export const EditorContext = createContext({} as EditorContextContent)

const EditorProvider: React.FC = ({children}) => {
    const [editorContents, setEditorContents] = useState("")
    const [assetType, setAssetType] = useState("page")

    const value: EditorContextContent = {editorContents, setEditorContents, assetType, setAssetType}
    
    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider

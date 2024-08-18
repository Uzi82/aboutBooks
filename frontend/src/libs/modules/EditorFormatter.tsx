import 'libs/styles/bin/EditorFormatter.scss';

import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@react-hooks-library/core'
import MarkdownPreview from '@uiw/react-markdown-preview';
import MarkdownEditor, {MarkdownPreviewProps} from '@uiw/react-markdown-editor';

function Previewer(props:MarkdownPreviewProps) {
    return <MarkdownPreview source={props.source}/>
}

interface IEditorFormatter {
    getDescription: (description: string) =>  void
}

let savedText = "";
export default function EditorFormatter ({getDescription}: IEditorFormatter) {
    const text = useRef<string>("");
    const isMDScreen = useMediaQuery('(max-width:1024px)');
    const isSMScreen = useMediaQuery('(max-width:510px)');

    const mdWidth = isMDScreen ? '500px' : '900px';
    const smWidth = isSMScreen ? '200px' : '500px';


    useEffect(() => {
        document.documentElement.setAttribute('data-color-mode', 'light')
        text.current = savedText;
        return () => {
            savedText = text.current;
        }
    }, [])


    return (
        <MarkdownEditor 
        className='EditorFormatter' 
        toolbarsMode={["preview"]}
        
        value={savedText}
        width={isSMScreen ? smWidth : mdWidth}
        previewWidth={isSMScreen ? smWidth : mdWidth}
        minHeight={'400px'}

        toolbars={[
            "undo","redo","bold","italic","header","strike","underline",
            "quote","olist","ulist","todo"
        ]}
        
        enableScroll={false}
        renderPreview={Previewer}
        onChange={(value) => {
            getDescription(value)
            text.current = value;
        }}
    />
        
    )
} 
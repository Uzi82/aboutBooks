import 'libs/styles/bin/UploadButton.scss';

interface Props {
    className: string;
    children: string;
    cb: (urlImage: string) => void
}


export default function UploadButton({className, children, cb}: Props) {
    function getUaploadFile(ev: React.ChangeEvent<HTMLInputElement>) {
        ev.preventDefault();
        const [file] = ev.target.files!;
        const readerFile = new FileReader();
        readerFile.readAsDataURL(file);
        
        readerFile.onload = () => {
            cb(readerFile.result as string)
        }
    }

    return (
        <button className={`UploadButton ${className}`}>
            <input onChange={getUaploadFile} type="file" id='uploaderImage'/>
            <label  htmlFor="uploaderImage"> {children} </label>
        </button>
    )
    
}
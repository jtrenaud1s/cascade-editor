import React, {useState, useRef} from 'react';
import 'cropperjs/dist/cropper.css';
import { ReactCropperElement, Cropper } from 'react-cropper';

const sharp = require('sharp')

const defaultSrc = 'example/img/child.jpg';

export const Demo: React.FC = () => {
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState('#');
    const imageRef = useRef<ReactCropperElement>(null);
    const [cropper, setCropper] = useState<Cropper>();
    const onChange = (e: any) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            sharp(reader.result).resize({width: 740, height: 494, options: {
                fit: 'outside'
            }}).then((data: any) => {
                setImage(data);
                console.log(data)
            })
            setImage(reader.result as any);
            console.log(reader.result)
        };
        
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== 'undefined') {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <div>
            <div style={{width: '100%'}}>
                <input type="file" onChange={onChange} />
                <button>Use default img</button>
                <br />
                <br />
                <Cropper
                    style={{height: 400, width: '100%'}}
                    initialAspectRatio={1.5}
                    guides={true}
                    src={image}
                    ref={imageRef}
                    dragMode={'move'}
                    cropBoxResizable={false}
                    
                    scalable={true}
                    checkOrientation={true} // https://github.com/fengyuanchen/cropperjs/issues/671
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                />
            </div>
            <div>
                <div className="box" style={{width: '50%', float: 'right'}}>
                    <h1>
                        <span>Crop</span>
                        <button style={{float: 'right'}} onClick={getCropData}>
                            Crop Image
                        </button>
                    </h1>
                    <img style={{width: '100%'}} src={cropData} alt="cropped" />
                </div>
            </div>
            <br style={{clear: 'both'}} />
        </div>
    );
};

export default Demo;
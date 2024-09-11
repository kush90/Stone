import React, { useEffect, useState } from 'react';
import Stone from '../assets/StoneList.xlsx';
import { readExcelFile } from '../Helper';
import ImageModal from './ImageModal'; // Assuming ImageModal is already created

const PhotoGrid = () => {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState({ type: '', urls: [] });

    const getList = async () => {
        setLoading(true);
        try {
            let result = await readExcelFile(Stone, '');
            console.log('Excel data:', result); // Debugging
            setLists(result);
        } catch (error) {
            console.error('Error reading Excel file:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    const handleClickOpen = (mediaUrls, mediaType) => {
        console.log(mediaUrls, mediaType)
        setSelectedMedia({ urls: mediaUrls || [], type: mediaType });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const disableContextMenu = (e) => {
        e.preventDefault();
    };

    const convertDriveLink = (url) => {
        const match = url.match(/d\/(.+?)\/view/);
        return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
    };

    return (
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
            {loading && <p>Loading...</p>}
            {!loading && lists.length > 0 && lists.map((list, index) => {
                const imageFileIds = list.Images?.map(url => url.match(/d\/(.+?)\/view/)?.[1]) || [];
                const videoFileIds = list.Videos?.map(url => url.match(/d\/(.+?)\/view/)?.[1]) || [];
                const pdfIds = list.Files.map(url => url.match(/d\/(.+?)\/view/)?.[1]) || [];

                const imageUrls = imageFileIds.map(id => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`);
                const videoUrls = videoFileIds.map(id => `https://drive.google.com/file/d/${id}/preview`);
                const pdfUrls = pdfIds.map(id => convertDriveLink(`https://drive.google.com/file/d/${id}/view`));


                return (
                    <div className="w3-quarter" key={index}>
                        <p>No. {index + 1}</p>
                        {imageUrls.length > 0 && (
                            <div
                                className="photo-grid-item"
                                onClick={() => handleClickOpen(imageUrls, 'image')}
                                onContextMenu={disableContextMenu}
                            >
                                <img
                                    src={imageUrls[0]} // Display the first image as a preview
                                    alt={list.Name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{list.Name}</h3>
                        <p style={{ fontSize: '14px', color: '#555', marginBottom: '5px' }}>{list.Description}</p>
                        <p style={{ fontSize: '16px', color: '#000', fontWeight: 'bold' }}>{list.Price}</p>
                        {videoUrls.length > 0 && videoUrls.map((videoUrl, i) => (
                            <a
                                key={i}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    handleClickOpen([videoUrl], 'video');
                                }}
                                style={{
                                    color: 'blue',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    display: 'block',
                                    margin: '5px 0'
                                }}
                            >
                                Watch Video {i + 1}
                            </a>
                        ))}

                        {pdfUrls.length > 0 && pdfUrls.map((pdfUrl, i) => (
                            <a
                                key={i}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    handleClickOpen([pdfUrl], 'pdf');
                                }}
                                style={{
                                    color: 'blue',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    display: 'block',
                                    margin: '5px 0'
                                }}
                            >
                                File {i + 1}
                            </a>
                        ))}
                    </div>
                );
            })}
            {/* Use the custom modal component */}
            <ImageModal
                open={open}
                onClose={handleClose}
                imageUrls={selectedMedia.type === 'image' ? selectedMedia.urls : []}
                videoUrls={selectedMedia.type === 'video' ? selectedMedia.urls : []}
                pdfUrls={selectedMedia.type === 'pdf' ? selectedMedia.urls : []}
                type={selectedMedia.type}
            />
        </div>
    );
};

export default PhotoGrid;

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
        setSelectedMedia({ urls: mediaUrls || [], type: mediaType });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
            {loading && <p>Loading...</p>}
            {!loading && lists.length > 0 && lists.map((list, index) => {
                // Extract file IDs from Google Drive URLs
                const imageFileIds = list.Images?.map(url => url.match(/d\/(.+?)\/view/)?.[1]) || [];
                const videoFileIds = list.Videos?.map(url => url.match(/d\/(.+?)\/view/)?.[1]) || [];

                // Use the thumbnail URL format for images
                const imageUrls = imageFileIds.map(id => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`);
                const videoUrls = videoFileIds.map(id => `https://drive.google.com/file/d/${id}/preview`);

                return (

                    <div className="w3-quarter" key={index}>
                        <p>No. {index + 1}</p> {/* Display count number */}

                        {imageUrls.length > 0 && (

                            <img
                                src={imageUrls[0]} // Display the first image as a preview
                                alt={list.Name}
                                style={{ width: '100%', height: '200px', cursor: 'pointer', objectFit: 'cover' }}
                                onClick={() => handleClickOpen(imageUrls, 'image')}
                                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                                onTouchStart={(e) => e.preventDefault()} // Disable right-click
                                onTouchEnd={(e) => e.preventDefault()} // Disable right-click
                                onTouchMove={(e) => e.preventDefault()} // Disable right-click
                            />
                        )}
                        <h3>{list.Name}</h3>
                        <p>{list.Description}</p>
                        <p>{list.Price}</p>
                        {videoUrls.length > 0 && videoUrls.map((videoUrl, i) => (
                            <a
                                key={i}
                                src={videoUrl}
                                onClick={() => handleClickOpen(videoUrl, 'video')}
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
                    </div>
                );
            })}
            {/* Use the custom modal component */}
            <ImageModal
                open={open}
                onClose={handleClose}
                imageUrls={selectedMedia.type === 'image' ? selectedMedia.urls : []}
                videoUrls={selectedMedia.type === 'video' ? selectedMedia.urls : []}
                type={selectedMedia.type}
            />
        </div>
    );
};

export default PhotoGrid;

import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Custom arrow components
const CustomPrevArrow = (props) => (
    <IconButton
        onClick={props.onClick}
        style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '50%',
            padding: 8,
            color: 'transparent'
        }}
    >
        <ArrowBackIos style={{ color: 'white' }} />
    </IconButton>
);

const CustomNextArrow = (props) => (
    <IconButton
        onClick={props.onClick}
        style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '50%',
            padding: 8,
            color: 'transparent'
        }}
    >
        <ArrowForwardIos style={{ color: 'white' }} />
    </IconButton>
);

const ImageModal = ({ open, onClose, imageUrls, videoUrls, type }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    // Conditional styling based on type
    const dialogContentStyle = {
        padding: 0,
        position: 'relative',
        ...(type !== 'image' && { height: '80vh' }), // Apply height only if the type is not 'image'
        maxHeight: '90vh',
        overflowY: 'auto',
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    position: 'relative',
                    overflow: 'hidden'
                }
            }}
        >
            <DialogContent style={dialogContentStyle}>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    aria-label="close"
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                {type === 'image' && imageUrls.length > 0 && (
                    <Slider {...sliderSettings} style={{ height: '100%' }}>
                        {imageUrls.map((url, index) => (
                            <div key={index} style={{ position: 'relative', height: '100%' }}>
                                <img
                                    src={url}
                                    alt={`Enlarged ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                )}
                {type === 'video' && videoUrls.length > 0 && (
                    <div style={{ position: 'relative', height: '100%' }}>
                        <iframe
                            src={videoUrls}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            allow="autoplay; encrypted-media"
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ImageModal;

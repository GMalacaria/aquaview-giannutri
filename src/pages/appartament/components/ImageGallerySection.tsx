import React from 'react';
import { Box } from '@mui/material';
import ImageGallery from 'react-image-gallery';

export default function ImageGallerySection({ imageUrls }: { imageUrls: string[] }) {
  if (!imageUrls?.length) return null;
  return (
    <Box sx={{ mb: 4, maxWidth: '1000px', display: 'flex', mx: 'auto' }}>
      <ImageGallery
        items={imageUrls.map((url) => ({ original: url, thumbnail: url + ' x2' }))}
        showPlayButton={false}
        showFullscreenButton={true}
      />
    </Box>
  );
}

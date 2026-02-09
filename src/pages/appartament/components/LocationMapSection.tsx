import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LocationMapSection() {
  const { t } = useTranslation();
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box>
        <Typography variant="h6" marginBottom={4} gutterBottom fontWeight={700}>
          {t('location')}
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.18674919578058!2d11.105136058491356!3d42.25444046952617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1770070581279!5m2!1sit!2sit"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa posizione appartamento"
        ></iframe>
      </Box>
    </Paper>
  );
}

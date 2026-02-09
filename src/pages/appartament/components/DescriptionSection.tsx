import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import MoreDetailsGrid from './MoreDetailsGrid';
import { useTranslation } from 'react-i18next';

export default function DescriptionSection({ description, currentLang, moreDetails }) {
  const { t } = useTranslation();
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom fontWeight={700}>
        {t('description')}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <div dangerouslySetInnerHTML={{ __html: description[currentLang] }} />
      </Box>
      <Box sx={{ my: 3 }}>
        <Typography sx={{ my: 2 }} variant="h6" gutterBottom fontWeight={700}>
          {t('more_details')}
        </Typography>
        <MoreDetailsGrid moreDetails={moreDetails} />
      </Box>
    </Paper>
  );
}

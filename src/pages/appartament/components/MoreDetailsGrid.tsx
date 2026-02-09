import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { getIconDetail } from '../utils/getIconDetail';
import { useTranslation } from 'react-i18next';

export default function MoreDetailsGrid({ moreDetails }) {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      {moreDetails.map((detail, index) => (
        <Grid
          key={index}
          size={{ xs: 12, md: 6 }}
          display={'flex'}
          alignItems="center"
          gap={1}
          margin={'auto'}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {getIconDetail(detail.icon)}
            <Typography variant="body1" gutterBottom>
              {t(detail.label, { count: detail?.count })}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

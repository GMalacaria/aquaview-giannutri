import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

export default function NavigationButtonsSection({ appartamentoId }) {
  const { t } = useTranslation();
  return (
    <Grid size={12}>
      <Grid sx={{ textAlign: 'center' }} size={12} my={3}>
        <Typography variant="h5" fontWeight={700}>
          {t('view_more_apartment')}
        </Typography>
      </Grid>
      <Grid container spacing={2} size={12}>
        <Grid sx={{ display: 'flex', justifyContent: 'left' }} size={6}>
          {appartamentoId > 30 && (
            <Button
              onClick={() =>
                (window.location.href = `/appartamento/${appartamentoId === 60 ? 30 : 60}`)
              }
              sx={{ minWidth: 80 }}
              variant="contained"
              color="primary"
              startIcon={<KeyboardArrowLeftIcon />}
            >
              {t('intimate')}
            </Button>
          )}
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'right' }} size={6}>
          {appartamentoId < 90 && (
            <Button
              onClick={() =>
                (window.location.href = `/appartamento/${appartamentoId === 60 ? 90 : 60}`)
              }
              sx={{ minWidth: 80 }}
              variant="contained"
              color="primary"
              endIcon={<KeyboardArrowRightIcon />}
            >
              {t('spacious')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

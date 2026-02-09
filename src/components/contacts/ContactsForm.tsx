import { Box, Container, TextField, Button, Grid, Typography, MenuItem } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import './contacts.scss';
import { useTranslation } from 'react-i18next';
import PrefixPhoneInput from '../inputs/PrefixPhoneInput';

export default function ContactFormSection({ object }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    const telefonoCompleto = data.phoneNumber ? `${data.phonePrefix} ${data.phoneNumber}` : '';

    const payload = {
      ...data,
      telefono: telefonoCompleto,
    };

    delete payload.phonePrefix;
    delete payload.phoneNumber;

    console.log({ object, ...payload });
  };
  return (
    <Box
      component="section"
      sx={{ pb: { xs: 3, md: 6 }, pt: 6 }}
      id="contact"
      justifyContent={'center'}
      display="flex"
    >
      <Grid
        container
        maxWidth="sm"
        id="form"
        sx={{ p: 3, borderRadius: 1 }}
        justifyContent={'center'}
        display="flex"
      >
        <Typography variant="h5" fontWeight={700} align="center" gutterBottom>
          {t('contact_us')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {/* Nome */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label={`${t('name')}*`}
                fullWidth
                {...register('nome', {
                  required: t('name_required'),
                })}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </Grid>

            {/* Cognome */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label={`${t('surname')}*`} fullWidth {...register('cognome')} />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label={`${t('email')}*`}
                fullWidth
                {...register('email', {
                  required: t('email_required'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t('email_not_valid'),
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            {/* prefisso */}
            <Grid size={{ xs: 5, sm: 3 }}>
              <PrefixPhoneInput control={control} name="phonePrefix" />
            </Grid>

            {/* telefono */}
            <Grid size={{ xs: 7, sm: 3 }}>
              <TextField
                label={t('phone')}
                fullWidth
                {...register('phoneNumber', {
                  pattern: {
                    value: /^[0-9\s()-]{6,15}$/,
                    message: t('phone_not_valid'),
                  },
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>

            {/* Messaggio */}
            <Grid size={12}>
              <TextField
                label={`${t('message')}*`}
                fullWidth
                multiline
                rows={4}
                {...register('messaggio', {
                  required: t('message_required'),
                })}
                error={!!errors.messaggio}
                helperText={errors.messaggio?.message?.toString()}
              />
            </Grid>

            {/* Bottone */}
            <Grid size={12} textAlign="center">
              <Button type="submit" variant="contained" size="large">
                {t('send_message')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

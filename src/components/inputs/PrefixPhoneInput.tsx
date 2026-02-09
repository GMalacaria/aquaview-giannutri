import { Controller } from 'react-hook-form';
import * as PHONE_PREFIXES from '../../assets/phonePrefixes.merged.json';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
type Prefix = {
  dial_code: string;
  flagSrc?: string;
  sigla: string;
  name: string;
};

const dedupePrefixes = (items: Prefix[]) => {
  const map = new Map<string, Prefix>();
  const normalizeDialCode = (code) => Number(code.replace(/[^\d]/g, ''));

  for (const item of items) {
    const key = `${item.dial_code}__${item.flagSrc ?? ''}`;

    if (!map.has(key)) {
      map.set(key, item);
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => normalizeDialCode(a.dial_code) - normalizeDialCode(b.dial_code)
  );
};

export default function PrefixPhoneInput({ control, name }) {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue="+39"
      rules={{ required: t('prefix_required') }}
      render={({ field, fieldState }) => (
        <TextField
          select
          label={`${t('prefix')}*`}
          fullWidth
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {dedupePrefixes(PHONE_PREFIXES.default).map((p, index) => (
            <MenuItem key={p.sigla + index} value={p.dial_code}>
              <Box
                id={p.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {p.flagSrc ? (
                  <Box
                    component="img"
                    src={`https:${p.flagSrc}`}
                    alt={`flag ${p.name}`}
                    sx={{ width: 24, height: 16, objectFit: 'cover' }}
                  />
                ) : (
                  <Typography variant="body2">{p.sigla}</Typography>
                )}

                <Typography variant="body2">{p.dial_code}</Typography>
              </Box>
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

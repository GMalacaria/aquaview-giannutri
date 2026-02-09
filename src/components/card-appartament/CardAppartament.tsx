import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export type ItemApartament = {
  id: number;
  name: string;
  focalPoints: { label: string; numbers?: number }[];
  imgUrl: string;
};

export function CardAppartament({
  inView,
  appartament,
}: {
  inView: boolean;
  appartament: ItemApartament;
}) {
  const { t } = useTranslation();

  return (
    <Card className={`home-card${inView ? ' in-view' : ''}`}>
      <img src={appartament.imgUrl} alt={appartament.name} />
      <CardContent className="home-card-content">
        <Typography variant="h6" align="center" fontWeight={700}>
          {appartament.name}
        </Typography>
        <ul>
          {appartament.focalPoints.map((feature, index) => (
            <li key={index}>
              {feature?.numbers ? `${feature.numbers} ` : ''}
              {t(feature.label)}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions className="home-card-actions">
        <Button variant="contained" href={`/appartamento/${appartament.id}`} fullWidth>
          {t('find_out_more')}
        </Button>
      </CardActions>
    </Card>
  );
}

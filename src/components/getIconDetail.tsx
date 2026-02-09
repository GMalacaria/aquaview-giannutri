import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import BedIcon from '@mui/icons-material/Bed';
import TvIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
export const getIconDetail = (icon: string) => {
  switch (icon) {
    case 'room':
      return <HomeIcon />;
    case 'bed':
      return <BedIcon />;
    case 'air_conditioning':
      return <AcUnitIcon />;
    case 'wifi':
      return <WifiIcon />;
    case 'tv':
      return <TvIcon />;
    case 'washing machine':
    case 'dishwasher':
      return <LocalLaundryServiceIcon />;

    default:
      return null;
  }
};

export type Apartment = {
  name: string;
  address: string;
  id: number;
  pricePerDay: {
    default: number;
    [month: string]: number;
  };
  focalPoints: { label: string; numbers?: number }[];
  imageUrls: string[];
  description: {
    it: string;
    en: string;
  };
  moreDetails: {
    icon: string;
    label: string;
    count?: number;
  }[];
};

export type BookingProps = {
  startDate: Date;
  endDate: Date;
  errorText?: string;
};

export type PriceDetail = {
  inTheSamePrice: boolean;
  totalPrice: number;
  pricePerNight: number;
  pricePerPeriod: number;
  discount: number;
  feePrice: number;
  totalNights: number;
};

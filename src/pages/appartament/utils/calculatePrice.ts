import { differenceInCalendarDays } from 'date-fns';
import { Apartment, BookingProps, PriceDetail } from '../types';

export function calculatePrice(
  booking: BookingProps,
  appartamentoData: Apartment
): PriceDetail | null {
  if (!booking) return null;

  const { startDate, endDate } = booking;
  if (!startDate || !endDate) return null;

  let pricePerPeriod = 0;
  let currentDate = new Date(startDate);
  let price: null | number = null;
  let inTheSamePrice = true;
  while (currentDate < endDate) {
    const month = currentDate.getMonth() + 1;
    const pricePerDay =
      appartamentoData.pricePerDay[month.toString()] || appartamentoData.pricePerDay.default;
    if (price && price !== pricePerDay) {
      inTheSamePrice = false;
    }
    price = pricePerDay;
    pricePerPeriod += pricePerDay;

    currentDate.setDate(currentDate.getDate() + 1);
  }
  const totalNights = differenceInCalendarDays(booking.endDate, booking.startDate);
  const feePrice = 100 * Math.ceil(totalNights / 7);
  const arrotondaCentinaia = (num) => Math.floor(num / 100) * 100;
  const discount =
    pricePerPeriod - arrotondaCentinaia(pricePerPeriod) > 30
      ? 30
      : pricePerPeriod - arrotondaCentinaia(pricePerPeriod);
  const totalPrice = pricePerPeriod + feePrice - discount;
  const pricePerNight = pricePerPeriod / totalNights;

  return {
    totalPrice,
    feePrice,
    pricePerPeriod,
    pricePerNight,
    discount,
    totalNights,
    inTheSamePrice,
  };
}

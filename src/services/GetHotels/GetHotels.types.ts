export interface GetHotelApiResponse {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: any[];
  telephone: string;
  email: string;
  images: Image[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: Position;
}

export interface Position {
  latitude: string;
  longitude: string;
  timezone: string;
}
export interface Image {
  url: string;
  alt: string;
}

export interface HotelDTO {
  id: string;
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: Image[];
}

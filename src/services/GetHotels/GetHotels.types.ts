export interface GetHotelsApiResponse {
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
}

export interface Image {
  url: string;
  alt: string;
}

export interface HotelsDTO {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  starRating: string;
  images: Image[];
}

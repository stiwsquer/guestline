export interface GetRoomsApiResponse {
  rooms: RoomInterface[];
  ratePlans: RatePlan[];
}

export interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription?: string;
  prePayment: string;
  cancellationPolicy?: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
}

export interface CancellationPolicy {
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  amount: number;
  hour?: string;
  days?: number;
}

export interface RoomInterface {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: Occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: Image[];
  facilities: Facility[];
}

export interface Facility {
  code: string;
  name: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

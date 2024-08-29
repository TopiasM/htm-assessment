export interface Property {
  id: number;
  propertyTypeId: number;
  propertyType: boolean;
  name: string;
  description: string;
  code: string;
  baseRoom: string;
  gradeId: number;
  gradeSort: number;
  locationId: number;
  accomTypeId: number;
  viewId: number;
  kitchenId: number;
  liftDistanceId: number;
  villageCentreDistanceId: number;
  bathrooms: number;
  standardPax: number;
  maximumPax: number;
  soldSeparately: boolean;
  upgradedFacilities: boolean;
  amenities: Object;
  bedConfigurations: number[];
  status: string;
  floorArea: number;
  online: boolean;
  images: never[];
}

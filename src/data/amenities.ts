/**
 * Amenities — only verified high-level items are marked available.
 * Detailed facilities remain PENDING until owner confirmation.
 */

export type AmenityStatus = 'available' | 'pending' | 'unavailable';

export type Amenity = {
  id: string;
  label: string;
  status: AmenityStatus;
  notes?: string;
};

export const amenities: Amenity[] = [
  { id: 'spacious-rooms', label: 'Spacious rooms', status: 'available' },
  { id: 'kitchen', label: 'Kitchen facility', status: 'available' },
  { id: 'terrace', label: 'Terrace with countryside views', status: 'available' },
  { id: 'family-group', label: 'Family & group friendly', status: 'available' },
  { id: 'parking', label: 'Parking', status: 'pending', notes: 'Driveway parking visible; confirm capacity for cars/SUVs' },
  { id: 'ac', label: 'Air conditioning', status: 'available', notes: 'Split AC visible in photographed bedrooms' },
  { id: 'wifi', label: 'Wi-Fi', status: 'pending' },
  { id: 'hot-water', label: 'Hot water', status: 'available', notes: 'Electric geyser visible in photographed bathroom' },
  { id: 'refrigerator', label: 'Refrigerator', status: 'pending' },
  { id: 'cooking-equipment', label: 'Cooking equipment', status: 'pending' },
  { id: 'tv', label: 'Television', status: 'pending' },
  { id: 'power-backup', label: 'Power backup', status: 'pending' },
  { id: 'lift', label: 'Lift', status: 'pending' },
  { id: 'drinking-water', label: 'Drinking water', status: 'pending' },
];

export const availableAmenities = amenities.filter((a) => a.status === 'available');

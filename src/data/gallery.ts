/**
 * Gallery asset registry — maps curated filenames to categories and alt text.
 * Raw originals live outside the repo until processed into src/assets.
 */

export type GalleryCategory =
  | 'rooms'
  | 'kitchen'
  | 'bathrooms'
  | 'common'
  | 'terrace'
  | 'exterior'
  | 'surroundings';

export type GalleryImage = {
  id: string;
  /** Descriptive production filename once processed */
  filename: string;
  alt: string;
  category: GalleryCategory;
  /** Source file from Desktop SGR Home Stay folder (for processing pipeline) */
  source?: string;
  featured?: boolean;
};

/**
 * Initial shortlist based on available property photos.
 * Exact category assignment will be refined after visual curation pass.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'exterior-facade',
    filename: 'homestay-exterior-facade-mopidevi.webp',
    alt: 'Front facade of Sri Guru Raghavendra HomeStay in Mopidevi with driveway parking',
    category: 'exterior',
    source: 'IMG_1108.jpg.jpeg',
    featured: true,
  },
  {
    id: 'common-living',
    filename: 'spacious-common-living-area.webp',
    alt: 'Bright spacious common living area with polished floors and open layout',
    category: 'common',
    source: 'IMG_1120.jpg.jpeg',
    featured: true,
  },
  {
    id: 'terrace-fields',
    filename: 'terrace-overlooking-agricultural-fields.webp',
    alt: 'Rooftop terrace overlooking green agricultural fields around Mopidevi',
    category: 'terrace',
    source: 'IMG_1148.jpg.jpeg',
    featured: true,
  },
];

export const galleryCategories: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'common', label: 'Common Spaces' },
  { id: 'terrace', label: 'Terrace' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'surroundings', label: 'Surroundings' },
];

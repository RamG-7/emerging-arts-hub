export type Medium = "Photography"|"Videography"|"Music"|"Painting"|"Drawing"|"Books";

export interface ArtistSocials {
  instagram?: string;
  tiktok?: string;
  website?: string;
}

export interface ArtistDonation {
  hasGoal: boolean;
  goalAmount?: number;
  raisedAmount?: number;
  supporterCount?: number;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  avatarUrl: string;
  coverUrl?: string;
  mediums: Medium[];
  location?: string;
  bio: string;
  socials?: ArtistSocials;
  donation: ArtistDonation;
}

export type WorkType = "image"|"video"|"audio"|"text";

export interface Work {
  id: string;
  artistId: string;
  title: string;
  medium: Medium;
  type: WorkType;
  mediaUrl?: string;
  textExcerpt?: string;
  durationSec?: number;
  description?: string;
  tags?: string[];
  likes: number;
  comments: number;
  createdAt: string; // ISO
}

export interface UpdatePost {
  id: string;
  artistId: string;
  body: string;
  mediaUrls?: string[];
  createdAt: string; // ISO
  likes: number;
  comments: number;
}

export interface Featured {
  weekOf: string; // ISO date (Monday)
  artistId: string;
  featuredWorkIds: string[];
}

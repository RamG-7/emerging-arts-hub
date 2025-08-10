import coverHero from "@/assets/cover_hero.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import avatar4 from "@/assets/avatar4.jpg";
import avatar5 from "@/assets/avatar5.jpg";
import avatar6 from "@/assets/avatar6.jpg";
import photo1 from "@/assets/work_photography1.jpg";
import paint1 from "@/assets/work_painting1.jpg";
import music1 from "@/assets/work_music1.jpg";
import video1 from "@/assets/work_video1.jpg";
import drawing1 from "@/assets/work_drawing1.jpg";
import book1 from "@/assets/work_book1.jpg";

import type { Artist, Work, UpdatePost, Featured, Medium } from "./types";

const mediums: Medium[] = ["Photography","Videography","Music","Painting","Drawing","Books"];

export const artists: Artist[] = [
  {
    id: "a1",
    slug: "aria-chen",
    name: "Aria Chen",
    avatarUrl: avatar1,
    coverUrl: coverHero,
    mediums: ["Photography"],
    location: "San Francisco, USA",
    bio: "Minimal scenes and bold shadows. Documenting light and form.",
    socials: { instagram: "https://instagram.com/aria" },
    donation: { hasGoal: true, goalAmount: 2000, raisedAmount: 860, supporterCount: 34 }
  },
  {
    id: "a2",
    slug: "luca-moretti",
    name: "Luca Moretti",
    avatarUrl: avatar2,
    coverUrl: coverHero,
    mediums: ["Painting"],
    location: "Milan, Italy",
    bio: "Abstract color fields and textured acrylics.",
    donation: { hasGoal: true, goalAmount: 1500, raisedAmount: 420, supporterCount: 18 }
  },
  {
    id: "a3",
    slug: "nova-reyes",
    name: "Nova Reyes",
    avatarUrl: avatar3,
    coverUrl: coverHero,
    mediums: ["Music"],
    location: "Berlin, Germany",
    bio: "Electronic producer blending ambient and club textures.",
    socials: { website: "https://novareyes.example" },
    donation: { hasGoal: false }
  },
  {
    id: "a4",
    slug: "mira-patel",
    name: "Mira Patel",
    avatarUrl: avatar4,
    coverUrl: coverHero,
    mediums: ["Videography"],
    location: "Mumbai, India",
    bio: "Cinematic micro-shorts exploring urban rhythms.",
    donation: { hasGoal: true, goalAmount: 3000, raisedAmount: 1210, supporterCount: 52 }
  },
  {
    id: "a5",
    slug: "theo-nakamura",
    name: "Theo Nakamura",
    avatarUrl: avatar5,
    coverUrl: coverHero,
    mediums: ["Drawing"],
    location: "Kyoto, Japan",
    bio: "Graphite studies of hands and motion.",
    donation: { hasGoal: false }
  },
  {
    id: "a6",
    slug: "sol-rivera",
    name: "Sol Rivera",
    avatarUrl: avatar6,
    coverUrl: coverHero,
    mediums: ["Books"],
    location: "Buenos Aires, Argentina",
    bio: "Indie publisher curating poetry and essays.",
    donation: { hasGoal: true, goalAmount: 1800, raisedAmount: 980, supporterCount: 41 }
  },
];

export const works: Work[] = [
  { id: "w1", artistId: "a1", title: "Concrete Noon", medium: "Photography", type: "image", mediaUrl: photo1, description: "Hard light on brutalist angles.", tags: ["architecture","light"], likes: 120, comments: 18, createdAt: new Date(Date.now()-1000*60*60*24*2).toISOString() },
  { id: "w2", artistId: "a1", title: "Shadow Lines", medium: "Photography", type: "image", mediaUrl: photo1, likes: 92, comments: 9, createdAt: new Date(Date.now()-1000*60*60*24*6).toISOString() },
  { id: "w3", artistId: "a2", title: "Cobalt Drift", medium: "Painting", type: "image", mediaUrl: paint1, description: "Acrylic on canvas.", likes: 75, comments: 6, createdAt: new Date(Date.now()-1000*60*60*48).toISOString() },
  { id: "w4", artistId: "a2", title: "Violet Field", medium: "Painting", type: "image", mediaUrl: paint1, likes: 64, comments: 5, createdAt: new Date(Date.now()-1000*60*60*72).toISOString() },
  { id: "w5", artistId: "a3", title: "Night Loop (Snippet)", medium: "Music", type: "audio", mediaUrl: music1, durationSec: 30, description: "30s preview.", likes: 210, comments: 33, createdAt: new Date(Date.now()-1000*60*60*12).toISOString() },
  { id: "w6", artistId: "a3", title: "Glass Echoes (Snippet)", medium: "Music", type: "audio", mediaUrl: music1, durationSec: 30, likes: 180, comments: 21, createdAt: new Date(Date.now()-1000*60*60*30).toISOString() },
  { id: "w7", artistId: "a4", title: "Neon Walk", medium: "Videography", type: "video", mediaUrl: video1, likes: 260, comments: 40, createdAt: new Date(Date.now()-1000*60*60*8).toISOString() },
  { id: "w8", artistId: "a4", title: "Corridor", medium: "Videography", type: "video", mediaUrl: video1, likes: 130, comments: 17, createdAt: new Date(Date.now()-1000*60*60*60).toISOString() },
  { id: "w9", artistId: "a5", title: "Hands Study I", medium: "Drawing", type: "image", mediaUrl: drawing1, likes: 88, comments: 11, createdAt: new Date(Date.now()-1000*60*60*20).toISOString() },
  { id: "w10", artistId: "a5", title: "Gesture Sheet", medium: "Drawing", type: "image", mediaUrl: drawing1, likes: 71, comments: 9, createdAt: new Date(Date.now()-1000*60*60*90).toISOString() },
  { id: "w11", artistId: "a6", title: "Chapbook: Dawn Lines", medium: "Books", type: "text", mediaUrl: book1, textExcerpt: "I watch the city yawn...", likes: 44, comments: 5, createdAt: new Date(Date.now()-1000*60*60*15).toISOString() },
  { id: "w12", artistId: "a6", title: "Cover: Quiet Roads", medium: "Books", type: "text", mediaUrl: book1, textExcerpt: "Roads that hum and hush...", likes: 39, comments: 2, createdAt: new Date(Date.now()-1000*60*60*120).toISOString() },
  // extra items for stream density
  { id: "w13", artistId: "a1", title: "Facade Rhythm", medium: "Photography", type: "image", mediaUrl: photo1, likes: 52, comments: 4, createdAt: new Date(Date.now()-1000*60*60*5).toISOString() },
  { id: "w14", artistId: "a2", title: "Cinder Rise", medium: "Painting", type: "image", mediaUrl: paint1, likes: 80, comments: 10, createdAt: new Date(Date.now()-1000*60*60*10).toISOString() },
  { id: "w15", artistId: "a3", title: "Pulse Grid (Snippet)", medium: "Music", type: "audio", mediaUrl: music1, durationSec: 30, likes: 95, comments: 14, createdAt: new Date(Date.now()-1000*60*60*22).toISOString() },
  { id: "w16", artistId: "a4", title: "Metro Blur", medium: "Videography", type: "video", mediaUrl: video1, likes: 102, comments: 12, createdAt: new Date(Date.now()-1000*60*60*9).toISOString() },
  { id: "w17", artistId: "a5", title: "Hands Study II", medium: "Drawing", type: "image", mediaUrl: drawing1, likes: 60, comments: 3, createdAt: new Date(Date.now()-1000*60*60*50).toISOString() },
  { id: "w18", artistId: "a6", title: "Poem Draft", medium: "Books", type: "text", mediaUrl: book1, textExcerpt: "Under quiet lamps...", likes: 31, comments: 3, createdAt: new Date(Date.now()-1000*60*60*25).toISOString() },
];

export const updates: UpdatePost[] = [
  { id: "u1", artistId: "a1", body: "Scouting rooftops for new angles.", mediaUrls: [photo1], likes: 23, comments: 4, createdAt: new Date(Date.now()-1000*60*60*3).toISOString() },
  { id: "u2", artistId: "a2", body: "Layering glazes today.", mediaUrls: [paint1], likes: 15, comments: 2, createdAt: new Date(Date.now()-1000*60*60*7).toISOString() },
  { id: "u3", artistId: "a3", body: "Testing a new synth patch.", mediaUrls: [music1], likes: 40, comments: 6, createdAt: new Date(Date.now()-1000*60*60*11).toISOString() },
  { id: "u4", artistId: "a4", body: "Storyboarding a micro-short.", mediaUrls: [video1], likes: 31, comments: 5, createdAt: new Date(Date.now()-1000*60*60*14).toISOString() },
  { id: "u5", artistId: "a5", body: "Gesture studies all morning.", mediaUrls: [drawing1], likes: 12, comments: 1, createdAt: new Date(Date.now()-1000*60*60*18).toISOString() },
  { id: "u6", artistId: "a6", body: "Proofing a new chapbook.", mediaUrls: [book1], likes: 19, comments: 2, createdAt: new Date(Date.now()-1000*60*60*20).toISOString() },
];

function getMonday(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // adjust when day is Sunday
  date.setDate(date.getDate() + diff);
  date.setHours(0,0,0,0);
  return date;
}

export const featured: Featured = {
  weekOf: getMonday(new Date()).toISOString(),
  artistId: "a4",
  featuredWorkIds: ["w7","w1","w3"],
};

export const byId = {
  artist: (id: string) => artists.find(a => a.id === id),
  work: (id: string) => works.find(w => w.id === id),
  artistBySlug: (slug: string) => artists.find(a => a.slug === slug),
  worksByArtist: (artistId: string) => works.filter(w => w.artistId === artistId),
  updatesByArtist: (artistId: string) => updates.filter(u => u.artistId === artistId),
};

export const MEDIUMS = mediums;

export const sorters = {
  newFirst: (a: Work, b: Work) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  trending: (a: Work, b: Work) => (b.likes*2 + b.comments*3) - (a.likes*2 + a.comments*3),
};

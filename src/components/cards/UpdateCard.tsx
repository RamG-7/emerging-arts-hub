import { UpdatePost } from "@/data/types";
import { byId } from "@/data/seed";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const UpdateCard = ({ post }: { post: UpdatePost }) => {
  const artist = byId.artist(post.artistId)!;
  const [likes, setLikes] = useState(post.likes);

  const share = async () => {
    const url = `${window.location.origin}/network`;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "Share this update with your friends." });
    } catch {
      toast({ title: "Copy failed", description: url });
    }
  };

  return (
    <article className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      <header className="flex items-center gap-3 px-4 py-3">
        <Link to={`/artist/${artist.slug}`} className="flex items-center gap-3 hover-scale">
          <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
          <div className="text-sm">
            <div className="font-medium leading-tight">{artist.name}</div>
            <time className="text-muted-foreground text-xs">{new Date(post.createdAt).toLocaleString()}</time>
          </div>
        </Link>
      </header>

      <div className="px-4 pb-4 space-y-3">
        <p className="text-sm">{post.body}</p>

        {post.mediaUrls && post.mediaUrls.length > 0 && (
          <div className={post.mediaUrls.length === 1 ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2"}>
            {post.mediaUrls.map((m, i) => (
              <img key={i} src={m} alt={`update attachment ${i + 1}`} className="rounded-lg object-cover w-full h-40 sm:h-56" loading="lazy" />
            ))}
          </div>
        )}
      </div>

      <footer className="px-4 py-3 flex items-center gap-4 text-sm border-t">
        <button className="flex items-center gap-2 hover:text-primary" onClick={() => setLikes((v)=>v+1)} aria-label="Like update">
          <Heart className="h-4 w-4" /> {likes}
        </button>
        <button className="flex items-center gap-2 hover:text-primary" onClick={() => toast({ title: "Comments", description: "Coming soon" })} aria-label="Comments">
          <MessageCircle className="h-4 w-4" /> {post.comments}
        </button>
        <button className="ml-auto flex items-center gap-2 hover:text-primary" onClick={share} aria-label="Share update">
          <Share2 className="h-4 w-4" /> Share
        </button>
      </footer>
    </article>
  );
};

export default UpdateCard;

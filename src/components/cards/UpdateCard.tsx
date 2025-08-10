import { UpdatePost } from "@/data/types";
import { byId } from "@/data/seed";

const UpdateCard = ({ post }: { post: UpdatePost }) => {
  const artist = byId.artist(post.artistId)!;
  return (
    <article className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
        <div className="text-sm">
          <div className="font-medium leading-tight">{artist.name}</div>
          <div className="text-muted-foreground text-xs">{new Date(post.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <div className="px-4 pb-4 space-y-3">
        <p className="text-sm">{post.body}</p>
        {post.mediaUrls && post.mediaUrls.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {post.mediaUrls.map((m, i) => (
              <img key={i} src={m} alt="post media" className="rounded-lg object-cover" loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default UpdateCard;

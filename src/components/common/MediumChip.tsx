import { Badge } from "@/components/ui/badge";
import type { Medium } from "@/data/types";

export const MediumChip = ({ medium }: { medium: Medium }) => (
  <Badge variant="secondary" className="px-3 py-1 rounded-full">
    {medium}
  </Badge>
);

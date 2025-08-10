import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DonateModal = ({ open, onOpenChange, artistName }: { open: boolean; onOpenChange: (v: boolean)=>void; artistName: string; }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Support {artistName}</DialogTitle>
          <DialogDescription>Test Mode: payments are disabled in this demo.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="rounded-lg p-4 bg-secondary/50 text-sm">
            Choose Stripe or PayPal in production. This is a non-functional placeholder.
          </div>
          <Button disabled className="w-full">Pay (disabled)</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;

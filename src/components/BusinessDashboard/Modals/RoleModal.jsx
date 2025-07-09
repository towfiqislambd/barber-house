import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RoleModal = ({ isOpen, setIsOpen, setRole, handleLoginWithGoogle }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">
            How you want to join
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-5 mt-5">
              <button
                onClick={() => {
                  setRole("customer");
                  setIsOpen(false);
                  handleLoginWithGoogle();
                }}
                className="w-full block py-3 text-center rounded-lg bg-primary duration-300 hover:bg-transparent transition-all font-medium text-lg border-2 hover:text-primary border-primary outline-none text-white"
              >
                Customer
              </button>

              <button
                onClick={() => {
                  setRole("business");
                  setIsOpen(false);
                  handleLoginWithGoogle();
                }}
                className="w-full block py-3 text-center rounded-lg bg-primary duration-300 hover:bg-transparent transition-all font-medium text-lg border-2 hover:text-primary border-primary outline-none text-white"
              >
                Business
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RoleModal;

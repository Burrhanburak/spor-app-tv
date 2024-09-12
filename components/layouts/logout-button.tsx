"use client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";

// ... diğer kodlar ..

import { logout } from "@/lib/actions/logout";

const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenuItem asChild>
      <Button onClick={handleLogout} className="w-full justify-start">
        <ExitIcon className="mr-2 size-4" aria-hidden="true" />
        {children}
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </Button>
    </DropdownMenuItem>
  );
};

export default LogoutButton;

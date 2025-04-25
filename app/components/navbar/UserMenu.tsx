"use client";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
   currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
   const [isOpen, setIsOpen] = useState(false);

   const registerModal = useRegisterModal();
   const loginModal = useLoginModal();
   const rentModal = useRentModal();
   const router = useRouter();

   const toogleOpen = useCallback(() => {
      setIsOpen((value) => !value);
   }, []);

   const onRent = useCallback(() => {
      if (!currentUser) {
         return loginModal.onOpen();
      }

      // Open rent Modal

      rentModal.onOpen();
   }, [currentUser, loginModal, rentModal]);
   return (
      <div className="relative">
         <div className="flex flex-row items-center gap-3">
            <div
               onClick={onRent}
               className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            >
               HomeRide your home
            </div>
            <div
               onClick={toogleOpen}
               className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
               <AiOutlineMenu />
               <div className="hidden md:block">
                  <Avatar src={currentUser?.image} />
               </div>
            </div>
         </div>
         {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-full bg-white overflow-hidden right-0 top-14 text-sm">
               <div className="flex flex-col cursor-pointer">
                  {currentUser ? (
                     <>
                        <MenuItem
                           onClick={() => {
                              router.push("/trips");
                              setIsOpen(false);
                           }}
                           label="My Trips"
                        />
                        <MenuItem
                           onClick={() => {
                              router.push("/favorites");
                              setIsOpen(false);
                           }}
                           label="My Favorites"
                        />
                        <MenuItem
                           onClick={() => {
                              router.push("/reservations");
                              setIsOpen(false);
                           }}
                           label="My Reservations"
                        />
                        <MenuItem
                           onClick={() => {
                              router.push("/properties");
                              setIsOpen(false);
                           }}
                           label="My Properties"
                        />
                        <MenuItem onClick={rentModal.onOpen} label="homeRide home" />
                        <hr />
                        <MenuItem
                           onClick={() => {
                              signOut();
                           }}
                           label="Logout"
                        />
                     </>
                  ) : (
                     <>
                        <MenuItem onClick={loginModal.onOpen} label="Login" />
                        <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
                     </>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};
export default UserMenu;

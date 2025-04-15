"use client";

import Image from "next/image";

interface AvatarProps {
   src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
   return (
      <div>
         <Image
            src={src || "/images/placeholder.jpg"}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
         />
      </div>
   );
};
export default Avatar;

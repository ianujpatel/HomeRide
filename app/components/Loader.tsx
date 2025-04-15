"use client";

import { PuffLoader } from "react-spinners";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
   return (
      <div className="h-[70vh] flex flex-col justify-center items-center">
         <PuffLoader size={100} color="red" />
      </div>
   );
};

export default Loader;

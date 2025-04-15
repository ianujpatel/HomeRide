"use client";

interface HeadigProps {
   title: string;
   subtitle?: string;
   center?: boolean;
}

const Heading: React.FC<HeadigProps> = ({ title, subtitle, center }) => {
   return (
      <div className={center ? "text-center" : "text-start"}>
         <div className="tex-2xl font-bold">{title}</div>
         <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
   );
};
export default Heading;

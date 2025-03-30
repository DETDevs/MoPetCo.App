import { FC } from "react";
import { Link } from "react-router-dom";
import { TranslatableText } from "../common/TranslatableText";

interface ServiceCircleCardProps {
  label: string;
  iconClass: string;
  link: string; // ruta absoluta o relativa
}

export const ServiceCircleCard: FC<ServiceCircleCardProps> = ({
  label,
  iconClass,
  link,
}) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300"
    >
      <div className="w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-300 transition-colors duration-300">
        <i
          className={`${iconClass} text-3xl text-blue-600 hover:text-blue-800 transition-colors duration-300`}
        ></i>
      </div>
      <p className="text-center font-semibold text-black"><TranslatableText text={label}/></p>
    </Link>
  );
};

interface ServiceCardProps {
  label: string;
}

export const ServiceCard = ({ label }: ServiceCardProps) => {
  return (
    <div className="bg-blue-200 w-32 h-36 rounded-xl flex flex-col items-center justify-center shadow-md">
      <div className="w-16 h-16 bg-white rounded-full mb-2"></div>
      <p className="text-sm font-bold text-center">{label}</p>
    </div>
  );
};

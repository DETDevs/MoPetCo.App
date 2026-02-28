import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "@/i18n";

interface Props {
  empleados: { id: string; name: string; avatar: string }[];
  value?: string;
  onChange: (id: string) => void;
}

export default function EmployeeSelect({ empleados, value, onChange }: Props) {
  const selectedEmpleado = empleados.find((e) => e.id === value);
  const { t } = useTranslation();

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full min-h-[48px] flex items-center gap-3 px-4 rounded-xl border-2 border-gray-200 hover:border-pink-300 transition-all duration-200 bg-white shadow-sm">
        {selectedEmpleado ? (
          <>
            <Avatar className="h-7 w-7 ring-2 ring-pink-200">
              <AvatarImage src={selectedEmpleado.avatar} />
              <AvatarFallback className="bg-pink-100 text-pink-600 text-xs font-semibold">
                {selectedEmpleado.name[0]}
              </AvatarFallback>
            </Avatar>
            <span className="truncate font-medium text-gray-800">
              {selectedEmpleado.name}
            </span>
          </>
        ) : (
          <span className="text-gray-400">
            {t("booking.selectEmployeePlaceholder")}
          </span>
        )}
      </SelectTrigger>

      <SelectContent className="rounded-xl border-gray-200 shadow-xl">
        {empleados.map((e) => (
          <SelectItem
            key={e.id}
            value={e.id}
            className="rounded-lg py-2.5 cursor-pointer hover:bg-pink-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-7 w-7">
                <AvatarImage src={e.avatar} />
                <AvatarFallback className="bg-pink-100 text-pink-600 text-xs font-semibold">
                  {e.name[0]}
                </AvatarFallback>
              </Avatar>
              <span className="truncate font-medium">{e.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface Props {
  empleados: { id: string; name: string; avatar: string }[];
  value?: string;
  onChange: (id: string) => void;
}

export default function EmployeeSelect({ empleados, value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-64">
        {empleados.find((e) => e.id === value)?.name ?? "Elegir encargado"}
      </SelectTrigger>
      <SelectContent>
        {empleados.map((e) => (
          <SelectItem key={e.id} value={e.id}>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={e.avatar} />
                <AvatarFallback>{e.name[0]}</AvatarFallback>
              </Avatar>
              {e.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

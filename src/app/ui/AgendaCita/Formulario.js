"use client";

import { Select, SelectItem, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { InputCalendar } from "./InputCalendar";

const typesItems = [
  { key: "parejas", label: "Parejas" },
  { key: "grupal", label: "Grupal" },
];

export const Formulario = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-center w-full sm:w-3/4 lg:h-2/4 m-auto">
      <h1 className="font-bold mb-3 text-xl sm:text-3xl">Agendar una cita en PsicoApoyo</h1>
      <Input
        type="text"
        label="Nombre"
        color="default"
        variant="bordered"
        name="nombre"
        onChange={handleChange}
      />
      <Input
        type="email"
        label="Email"
        variant="bordered"
        className="mt-3"
        name="email"
        onChange={handleChange}
      />
      <Select
        label="Seleccione el tipo de terapia"
        variant="bordered"
        className="mt-3"
        name="tipo"
        items={typesItems}
        onChange={handleChange}
      >
        {(typeItem) => <SelectItem>{typeItem.label}</SelectItem>}
      </Select>
      <Textarea
        label="Description"
        variant="bordered"
        placeholder="Enter your description"
        className="mt-3"
        minRows={2}
        name="descripcion"
        onChange={handleChange}
      />
      <InputCalendar handleChange={handleChange} />
    </div>
  );
};

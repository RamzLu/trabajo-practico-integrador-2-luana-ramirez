import { useState } from "react";

export const useForm = (inicialValue) => {
  const [form, setForm] = useState(inicialValue);
  const handleChange = (evento) => {
    const { value, setValue } = evento.target;
    setForm({
      ...form,
      [value]: setValue,
    });
  };
  const handleReset = () => {
    setForm(inicialValue);
  };
  return {
    form,
    handleChange,
    handleReset,
  };
};

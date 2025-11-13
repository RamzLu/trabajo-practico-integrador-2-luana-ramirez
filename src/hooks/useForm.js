import { useState } from "react";

export const useForm = (inicialValue) => {
  const [form, setForm] = useState(inicialValue);
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setForm({
      ...form,
      [name]: value,
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

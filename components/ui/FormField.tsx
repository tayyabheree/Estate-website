import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  id: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  type?: "text" | "email" | "tel";
  placeholder?: string;
};

export function FormField({
  label,
  id,
  error,
  register,
  type = "text",
  placeholder
}: Props) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-bold text-ink">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        aria-invalid={Boolean(error)}
        className="min-h-12 w-full border border-line bg-white px-4 text-ink focus:border-brandBlue"
      />
      {error && (
        <span className="mt-1 block text-sm text-[#7A1F26]">{error.message}</span>
      )}
    </label>
  );
}

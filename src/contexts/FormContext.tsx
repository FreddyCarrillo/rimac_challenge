import { createContext, ReactNode, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

const FormContext = createContext<UseFormReturn<any> | undefined>(undefined);

export const useFormContext = (): UseFormReturn<any> => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  form: UseFormReturn<any>;
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ form, children }) => {
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};

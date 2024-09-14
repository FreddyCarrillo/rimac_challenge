import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { QuoteVehicle } from "../types/vehicleQuote";
import QuoteVehicleService from "../services/QuoteVehicleService";
import { useInitStore } from "../../../store/initStore";
import { useNavigate } from "react-router-dom";

const schemaValidation = yup
  .object({
    dni: yup
      .string()
      .min(8, 'El DNI debe tener 8 caracteres')
      .max(8, 'El DNI debe tener 8 caracteres')
      .required('El DNI es obligatorio.'),
    phone: yup
      .string()
      .min(9, 'El celular debe tener 9 caracteres')
      .max(9, 'El celular debe tener 9 caracteres')
      .required('El celular es obligatorio.'),
    carPlace: yup
      .string()
      .min(6, 'La placa debe tener 6 caracteres')
      .max(6, 'La placa debe tener 6 caracteres')
      .required('La placa es obligatoria.'),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], 'Debes aceptar los términos y condiciones.')
      .required('Debes aceptar los términos y condiciones.')
  });

const quoteVehicleService = new QuoteVehicleService();

export const useQuoteVehicle = () => {

  const [initialValues, setInitialValues] = useState<QuoteVehicle>({
    dni: '',
    phone: '',
    carPlace: '',
    termsAndConditions: false,
  });

  const setInitData = useInitStore(state => state.setInitData);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schemaValidation)
  });

  const onSubmit = async (dataVehicle: QuoteVehicle ) => {
    try {
      setIsLoading(true);
      const { data } = await quoteVehicleService.getUserByJsonPlaceHolder();
      setInitData({
        ...dataVehicle,
        user: data
      });
      setIsLoading(false);
      navigate('/vehicle-data');
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  return {
    form,
    setInitialValues,
    onSubmit,
    isLoading,
  }

};

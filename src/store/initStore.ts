import { create } from 'zustand';

interface Vehicle {
  dni: string;
  phone: string;
  carPlace: string;
  user?: any;
}

interface InitState {
  vehicle: Vehicle | null | any;
  setInitData: (vehicle: Vehicle) => void;
  clearInitData: () => void;
}

const getStoredAuthData = () => {
  const vehicle = localStorage.getItem('vehicle');
  return {
    vehicle: vehicle ? JSON.parse(vehicle) : null,
  };
};

export const useInitStore = create<InitState>(set => ({
  ...getStoredAuthData(),
  setInitData: (vehicle) => {
    localStorage.setItem('vehicle', JSON.stringify(vehicle));
    set({ vehicle });
  },
  clearInitData: () => {
    localStorage.removeItem('vehicle');
    set({ vehicle: null });
  },
}));

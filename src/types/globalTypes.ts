export interface ImagePickerResponse {
  path: string;
  mime: string;
  width: number;
  height: number;
  filename: string;
}

export interface PickerItem {
  label: string;
  value: string;
}

export interface OfferedService {
  name: string;
  category: string;
  price: number;
  duration: number;
  id: number;
}

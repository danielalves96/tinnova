import {colors} from '@types'

interface unusual extends colors{
  error?: string | boolean;
  widthInput?: number;
  disabled?: boolean;
  backgroundInput?: string;
  placeholder: string;
}

export interface thisComp extends unusual{
  label: string;
  onChange: any;
  value?: string;
  name?: string;
  maxLength?: number;
}

export interface thisCompStyle extends unusual{
  props?: any;
  focus?: boolean;
  ref?: any
}
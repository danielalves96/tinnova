export interface colors {
    color?: 'primary' | 'secundary' | 'black' | 'white' | 'disabled';
  }
  
  export interface variationColor {
    variation?: 'main' | 'light' | 'dark' | 'inverse';
  }
  
  export interface alertColors {
    color?: 'alertSuccess' | 'alertDanger' | 'alertWarning' | 'alertInfo';
  }
  
  export interface registerData {
    name: string;
    cpf: string;
    phone: string;
    email: string;
  }
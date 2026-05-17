export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  ciudad: string;
  foto: string;
}

export interface Formacion {
  id: number;
  titulo: string;
  institucion: string;
  anio: string;
}

export interface CvResponse {
  persona: Persona;
  formacion: Formacion[];
}

export interface Usuario {
  nombreUsuario: string;
  contrasena: string;
  correo: string;
  habilitado?: boolean;
  roles?: string[];
}

// Contratos reutilizables para cualquier pantalla que muestre notificaciones.
export type EstadoAviso = 'nuevo' | 'atencion' | 'info';
export type TipoAviso = 'llegada' | 'retraso' | 'ubicacion';
export type Pestana = 'inicio' | 'paquetes' | 'avisos' | 'perfil';

export interface Aviso {
  id: string;
  titulo: string;
  referencia: string;
  descripcion?: string;
  estado: EstadoAviso;
  tipo: TipoAviso;
}

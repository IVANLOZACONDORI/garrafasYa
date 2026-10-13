import type { Aviso } from '../tipos/aviso';

// Datos de demostracion. Sustituye esta lista por la respuesta de tu API.
export const avisosEjemplo: Aviso[] = [
  {
    id: 'PK-219',
    titulo: 'Tu paquete ya llegó',
    referencia: 'PK-219 · Mochila urbana · Rol comprador',
    descripcion: 'Puedes recogerlo en Sucursal Centro. En este paquete paga el comerciante.',
    estado: 'nuevo',
    tipo: 'llegada',
  },
  {
    id: 'PK-184-retraso',
    titulo: 'Paquete no recogido a tiempo',
    referencia: 'PK-184 · Rol comerciante',
    descripcion: 'El sistema muestra un recargo adicional porque el comprador aún no retiró el producto.',
    estado: 'atencion',
    tipo: 'retraso',
  },
  {
    id: 'PK-184-ubicacion',
    titulo: 'Ubicación actualizada',
    referencia: 'PK-184 fue reubicado al locker M-12',
    estado: 'info',
    tipo: 'ubicacion',
  },
];

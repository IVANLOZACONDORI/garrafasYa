import { StyleSheet } from 'react-native';
import { colores, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  contenedor: { width: 44, height: 44, borderRadius: radios.md, alignItems: 'center', justifyContent: 'center' },
  llegada: { backgroundColor: colores.azulClaro },
  retraso: { backgroundColor: colores.rojoClaro },
  ubicacion: { backgroundColor: colores.ambarClaro },
});

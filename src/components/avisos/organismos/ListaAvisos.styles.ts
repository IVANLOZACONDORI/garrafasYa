import { StyleSheet } from 'react-native';
import { colores, espacio, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  contenedor: { gap: espacio.md },
  vacio: { alignItems: 'center', backgroundColor: colores.blanco, padding: espacio.xxl,
    borderRadius: radios.lg, gap: espacio.sm },
});

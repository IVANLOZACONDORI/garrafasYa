import { StyleSheet } from 'react-native';
import { colores, espacio } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colores.fondo },
  contenedor: { flex: 1, width: '100%', maxWidth: 620, alignSelf: 'center', backgroundColor: colores.fondo },
  desplazamiento: { flex: 1 },
  contenido: { paddingHorizontal: espacio.xl, paddingBottom: espacio.xxl, paddingTop: espacio.sm },
});

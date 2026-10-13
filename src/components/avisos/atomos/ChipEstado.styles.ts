import { StyleSheet } from 'react-native';
import { colores } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  contenedor: { alignSelf: 'flex-start', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 12 },
  texto: { fontSize: 10, fontWeight: '700' },
  nuevo: { backgroundColor: colores.verdeClaro },
  nuevoTexto: { color: colores.verde },
  atencion: { backgroundColor: colores.rojoClaro },
  atencionTexto: { color: colores.rojo },
  info: { backgroundColor: colores.ambarClaro },
  infoTexto: { color: colores.ambar },
});

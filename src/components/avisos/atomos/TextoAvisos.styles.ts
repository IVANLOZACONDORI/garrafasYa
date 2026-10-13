import { StyleSheet } from 'react-native';
import { colores } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  base: { color: colores.texto },
  titulo: { fontSize: 27, lineHeight: 32, fontWeight: '800' },
  subtitulo: { fontSize: 13, lineHeight: 19, color: colores.textoSecundario },
  tarjeta: { fontSize: 15, lineHeight: 20, fontWeight: '700' },
  normal: { fontSize: 14, lineHeight: 21 },
  detalle: { fontSize: 12, lineHeight: 18, color: colores.textoSecundario },
  menu: { fontSize: 11, lineHeight: 15, fontWeight: '600' },
});

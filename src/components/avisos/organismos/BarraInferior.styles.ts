import { StyleSheet } from 'react-native';
import { colores } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  barra: { flexDirection: 'row', borderTopWidth: 1, borderColor: colores.borde,
    backgroundColor: colores.blanco, minHeight: 64, paddingHorizontal: 10 },
});

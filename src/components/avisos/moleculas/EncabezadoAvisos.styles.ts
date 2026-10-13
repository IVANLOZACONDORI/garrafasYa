import { StyleSheet } from 'react-native';
import { espacio } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  contenedor: { flexDirection: 'row', alignItems: 'center', gap: espacio.md, paddingHorizontal: espacio.xl,
    paddingTop: espacio.lg, paddingBottom: espacio.lg },
  textos: { flex: 1, gap: 3 },
});

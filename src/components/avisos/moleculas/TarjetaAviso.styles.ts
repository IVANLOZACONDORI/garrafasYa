import { StyleSheet } from 'react-native';
import { colores, espacio, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: colores.blanco, borderWidth: 1, borderColor: colores.borde,
    padding: espacio.lg, borderRadius: radios.lg, gap: espacio.md,
    shadowColor: colores.sombra, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.05,
    shadowRadius: 10, elevation: 2 },
  presionada: { opacity: 0.75 },
  fila: { flexDirection: 'row', alignItems: 'flex-start', gap: espacio.sm },
  textos: { flex: 1, minWidth: 0, gap: 5 },
  bloqueDescripcion: { paddingTop: espacio.md, borderTopWidth: 1, borderTopColor: colores.borde },
});

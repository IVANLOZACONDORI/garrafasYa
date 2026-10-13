import { StyleSheet } from 'react-native';
import { colores, espacio, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: 'rgba(15,23,42,0.50)', justifyContent: 'center', padding: espacio.xl },
  panel: { backgroundColor: colores.blanco, padding: espacio.xl, borderRadius: radios.lg, gap: espacio.md },
  superior: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconoEstado: { flexDirection: 'row', alignItems: 'center', gap: espacio.md },
  boton: { backgroundColor: colores.azul, borderRadius: radios.md, alignItems: 'center', paddingVertical: 13, marginTop: espacio.sm },
  textoBoton: { color: colores.blanco, fontWeight: '800', fontSize: 14 },
});

import { StyleSheet } from 'react-native';
import { colores } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 8, paddingBottom: 6, gap: 3 },
  icono: { alignItems: 'center', justifyContent: 'center', width: 42, height: 29, borderRadius: 13 },
  iconoActivo: { backgroundColor: colores.azulClaro },
  textoActivo: { color: colores.azul, fontWeight: '800' },
  textoInactivo: { color: colores.textoSecundario },
});

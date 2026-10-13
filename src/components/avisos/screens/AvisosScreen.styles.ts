import { StyleSheet } from 'react-native';
import { colores, espacio, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  placeholder: { backgroundColor: colores.blanco, borderRadius: radios.lg,
    borderWidth: 1, borderColor: colores.borde, alignItems: 'center', padding: espacio.xxl, gap: espacio.md },
  centrado: { textAlign: 'center' },
  boton: { paddingHorizontal: espacio.lg, paddingVertical: espacio.md,
    backgroundColor: colores.azul, borderRadius: radios.md, marginTop: espacio.sm },
  textoBoton: { color: colores.blanco, fontSize: 13, fontWeight: '800' },
});

import { StyleSheet } from 'react-native';
import { colores, radios } from '../estilos/tokens';

export const estilos = StyleSheet.create({
  boton: { width: 42, height: 42, backgroundColor: colores.blanco, borderWidth: 1,
    borderColor: colores.borde, borderRadius: radios.md, alignItems: 'center', justifyContent: 'center' },
});

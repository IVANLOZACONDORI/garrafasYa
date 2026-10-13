import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { TipoAviso } from '../tipos/aviso';
import { colores } from '../estilos/tokens';
import { estilos } from './IconoAviso.styles';

const nombres: Record<TipoAviso, React.ComponentProps<typeof Ionicons>['name']> = {
  llegada: 'bag-handle-outline',
  retraso: 'cube-outline',
  ubicacion: 'location-outline',
};
const tintes: Record<TipoAviso, string> = {
  llegada: colores.azul,
  retraso: colores.rojo,
  ubicacion: colores.ambar,
};

type Props = { tipo: TipoAviso };

export function IconoAviso({ tipo }: Props) {
  return (
    <View style={[estilos.contenedor, estilos[tipo]]}>
      <Ionicons name={nombres[tipo]} size={22} color={tintes[tipo]} />
    </View>
  );
}

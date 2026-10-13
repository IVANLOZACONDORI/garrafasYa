import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colores } from '../estilos/tokens';
import { estilos } from './BotonVolver.styles';

type Props = { onPress: () => void };

export function BotonVolver({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={estilos.boton}
      accessibilityRole="button" accessibilityLabel="Volver">
      <Ionicons name="chevron-back" size={23} color={colores.texto} />
    </Pressable>
  );
}

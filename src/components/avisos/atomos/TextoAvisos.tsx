import React from 'react';
import { Text, type TextProps } from 'react-native';
import { estilos } from './TextoAvisos.styles';

type Variante = 'titulo' | 'subtitulo' | 'tarjeta' | 'normal' | 'detalle' | 'menu';
type Props = TextProps & { variante?: Variante };

export function TextoAvisos({ variante = 'normal', style, children, ...resto }: Props) {
  return <Text {...resto} style={[estilos.base, estilos[variante], style]}>{children}</Text>;
}

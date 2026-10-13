import React from 'react';
import { View } from 'react-native';
import type { EstadoAviso } from '../tipos/aviso';
import { TextoAvisos } from './TextoAvisos';
import { estilos } from './ChipEstado.styles';

const etiquetas: Record<EstadoAviso, string> = {
  nuevo: 'Nuevo',
  atencion: 'Atención',
  info: 'Info',
};

type Props = { estado: EstadoAviso };

export function ChipEstado({ estado }: Props) {
  return (
    <View style={[estilos.contenedor, estilos[estado]]}>
      <TextoAvisos style={[estilos.texto, estilos[`${estado}Texto`]]}>
        {etiquetas[estado]}
      </TextoAvisos>
    </View>
  );
}

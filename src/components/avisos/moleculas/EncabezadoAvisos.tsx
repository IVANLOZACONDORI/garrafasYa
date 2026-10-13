import React from 'react';
import { View } from 'react-native';
import { BotonVolver } from '../atomos/BotonVolver';
import { TextoAvisos } from '../atomos/TextoAvisos';
import { estilos } from './EncabezadoAvisos.styles';

type Props = { titulo: string; subtitulo: string; onVolver: () => void };

export function EncabezadoAvisos({ titulo, subtitulo, onVolver }: Props) {
  return (
    <View style={estilos.contenedor}>
      <BotonVolver onPress={onVolver} />
      <View style={estilos.textos}>
        <TextoAvisos variante="titulo">{titulo}</TextoAvisos>
        <TextoAvisos variante="subtitulo">{subtitulo}</TextoAvisos>
      </View>
    </View>
  );
}

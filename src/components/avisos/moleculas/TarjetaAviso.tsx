import React from 'react';
import { Pressable, View } from 'react-native';
import { IconoAviso } from '../atomos/IconoAviso';
import { ChipEstado } from '../atomos/ChipEstado';
import { TextoAvisos } from '../atomos/TextoAvisos';
import type { Aviso } from '../tipos/aviso';
import { estilos } from './TarjetaAviso.styles';

type Props = { aviso: Aviso; onSeleccionar: (aviso: Aviso) => void };

export function TarjetaAviso({ aviso, onSeleccionar }: Props) {
  return (
    <Pressable
      onPress={() => onSeleccionar(aviso)}
      style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}
      accessibilityRole="button"
      accessibilityLabel={`Abrir aviso: ${aviso.titulo}`}
    >
      <View style={estilos.fila}>
        <IconoAviso tipo={aviso.tipo} />
        <View style={estilos.textos}>
          <TextoAvisos variante="tarjeta">{aviso.titulo}</TextoAvisos>
          <TextoAvisos variante="detalle">{aviso.referencia}</TextoAvisos>
        </View>
        <ChipEstado estado={aviso.estado} />
      </View>
      {aviso.descripcion ? (
        <View style={estilos.bloqueDescripcion}>
          <TextoAvisos variante="detalle">{aviso.descripcion}</TextoAvisos>
        </View>
      ) : null}
    </Pressable>
  );
}

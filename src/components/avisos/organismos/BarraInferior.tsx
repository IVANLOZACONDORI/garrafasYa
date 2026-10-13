import React from 'react';
import { View } from 'react-native';
import type { Pestana } from '../tipos/aviso';
import { OpcionNavegacion } from '../moleculas/OpcionNavegacion';
import { estilos } from './BarraInferior.styles';

const pestanas: Pestana[] = ['inicio', 'paquetes', 'avisos', 'perfil'];

type Props = { activa: Pestana; onCambiar: (pestana: Pestana) => void };

export function BarraInferior({ activa, onCambiar }: Props) {
  return (
    <View style={estilos.barra}>
      {pestanas.map((pestana) => (
        <OpcionNavegacion key={pestana} pestana={pestana}
          activa={activa === pestana} onCambiar={onCambiar} />
      ))}
    </View>
  );
}

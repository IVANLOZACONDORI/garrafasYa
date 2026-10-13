import React from 'react';
import { View } from 'react-native';
import type { Aviso } from '../tipos/aviso';
import { TarjetaAviso } from '../moleculas/TarjetaAviso';
import { TextoAvisos } from '../atomos/TextoAvisos';
import { estilos } from './ListaAvisos.styles';

type Props = { avisos: Aviso[]; onSeleccionar: (aviso: Aviso) => void };

export function ListaAvisos({ avisos, onSeleccionar }: Props) {
  return (
    <View style={estilos.contenedor}>
      {avisos.length === 0 ? (
        <View style={estilos.vacio}>
          <TextoAvisos variante="tarjeta">No tienes avisos por ahora</TextoAvisos>
          <TextoAvisos variante="detalle">Aquí verás las novedades de tus paquetes.</TextoAvisos>
        </View>
      ) : (
        avisos.map((aviso) => <TarjetaAviso key={aviso.id} aviso={aviso} onSeleccionar={onSeleccionar} />)
      )}
    </View>
  );
}

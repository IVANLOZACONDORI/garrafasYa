import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { Pestana } from '../tipos/aviso';
import { EncabezadoAvisos } from '../moleculas/EncabezadoAvisos';
import { BarraInferior } from '../organismos/BarraInferior';
import { colores } from '../estilos/tokens';
import { estilos } from './PlantillaAvisos.styles';

type Props = {
  titulo: string;
  subtitulo: string;
  activa: Pestana;
  onCambiar: (pestana: Pestana) => void;
  onVolver: () => void;
  children: React.ReactNode;
};

export function PlantillaAvisos({ titulo, subtitulo, activa, onCambiar, onVolver, children }: Props) {
  return (
    <SafeAreaView style={estilos.pantalla} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={colores.fondo} />
      <View style={estilos.contenedor}>
        <EncabezadoAvisos titulo={titulo} subtitulo={subtitulo} onVolver={onVolver} />
        <ScrollView style={estilos.desplazamiento}
          contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        <BarraInferior activa={activa} onCambiar={onCambiar} />
      </View>
    </SafeAreaView>
  );
}

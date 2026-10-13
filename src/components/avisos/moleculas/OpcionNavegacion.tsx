import React from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextoAvisos } from '../atomos/TextoAvisos';
import type { Pestana } from '../tipos/aviso';
import { colores } from '../estilos/tokens';
import { estilos } from './OpcionNavegacion.styles';

const opciones: Record<Pestana, { titulo: string; icono: React.ComponentProps<typeof Ionicons>['name'] }> = {
  inicio: { titulo: 'Inicio', icono: 'home-outline' },
  paquetes: { titulo: 'Paquetes', icono: 'cube-outline' },
  avisos: { titulo: 'Avisos', icono: 'notifications-outline' },
  perfil: { titulo: 'Perfil', icono: 'person-outline' },
};

type Props = { pestana: Pestana; activa: boolean; onCambiar: (pestana: Pestana) => void };

export function OpcionNavegacion({ pestana, activa, onCambiar }: Props) {
  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: activa }}
      accessibilityLabel={opciones[pestana].titulo}
      onPress={() => onCambiar(pestana)}
      style={estilos.contenedor}
    >
      <View style={[estilos.icono, activa && estilos.iconoActivo]}>
        <Ionicons name={opciones[pestana].icono} size={21}
          color={activa ? colores.azul : colores.textoSecundario} />
      </View>
      <TextoAvisos variante="menu"
        style={activa ? estilos.textoActivo : estilos.textoInactivo}>
        {opciones[pestana].titulo}
      </TextoAvisos>
    </Pressable>
  );
}

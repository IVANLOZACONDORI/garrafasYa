import React from 'react';
import { Modal, Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ChipEstado } from '../atomos/ChipEstado';
import { IconoAviso } from '../atomos/IconoAviso';
import { TextoAvisos } from '../atomos/TextoAvisos';
import type { Aviso } from '../tipos/aviso';
import { colores } from '../estilos/tokens';
import { estilos } from './ModalDetalleAviso.styles';

type Props = { aviso: Aviso | null; onCerrar: () => void };

export function ModalDetalleAviso({ aviso, onCerrar }: Props) {
  return (
    <Modal visible={aviso !== null} transparent animationType="fade" onRequestClose={onCerrar}>
      <View style={estilos.fondo}>
        <View style={estilos.panel}>
          <View style={estilos.superior}>
            <TextoAvisos variante="tarjeta">Detalle del aviso</TextoAvisos>
            <Pressable onPress={onCerrar} accessibilityRole="button" accessibilityLabel="Cerrar aviso">
              <Ionicons name="close" size={24} color={colores.texto} />
            </Pressable>
          </View>
          {aviso ? (
            <>
              <View style={estilos.iconoEstado}>
                <IconoAviso tipo={aviso.tipo} />
                <ChipEstado estado={aviso.estado} />
              </View>
              <TextoAvisos variante="tarjeta">{aviso.titulo}</TextoAvisos>
              <TextoAvisos variante="detalle">{aviso.referencia}</TextoAvisos>
              {aviso.descripcion ? <TextoAvisos>{aviso.descripcion}</TextoAvisos> : null}
              <Pressable style={estilos.boton} onPress={onCerrar} accessibilityRole="button">
                <TextoAvisos style={estilos.textoBoton}>Entendido</TextoAvisos>
              </Pressable>
            </>
          ) : null}
        </View>
      </View>
    </Modal>
  );
}

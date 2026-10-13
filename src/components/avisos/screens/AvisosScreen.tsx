import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { TextoAvisos } from '../atomos/TextoAvisos';
import { ListaAvisos } from '../organismos/ListaAvisos';
import { ModalDetalleAviso } from '../organismos/ModalDetalleAviso';
import { PlantillaAvisos } from '../templates/PlantillaAvisos';
import { avisosEjemplo } from '../datos/avisosEjemplo';
import { colores } from '../estilos/tokens';
import type { Aviso, Pestana } from '../tipos/aviso';
import { estilos } from './AvisosScreen.styles';

const titulos: Record<Pestana, { titulo: string; subtitulo: string }> = {
  inicio: { titulo: 'Garrafas Ya', subtitulo: 'Tus envíos en un solo lugar' },
  paquetes: { titulo: 'Paquetes', subtitulo: 'Consulta tus pedidos' },
  avisos: { titulo: 'Avisos', subtitulo: 'Eventos relevantes de ambos roles' },
  perfil: { titulo: 'Perfil', subtitulo: 'Tu cuenta y preferencias' },
};

// Pantalla de demostracion con navegacion local. Puedes reemplazar las otras
// pestanas por rutas reales cuando el equipo implemente esas pantallas.
export default function AvisosScreen() {
  const router = useRouter();
  const [pestana, setPestana] = useState<Pestana>('avisos');
  const [seleccionado, setSeleccionado] = useState<Aviso | null>(null);
  const { titulo, subtitulo } = titulos[pestana];

  const volver = () => {
    if (pestana !== 'avisos') {
      setPestana('avisos');
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <>
      <PlantillaAvisos titulo={titulo} subtitulo={subtitulo} activa={pestana}
        onCambiar={setPestana} onVolver={volver}>
        {pestana === 'avisos' ? (
          <ListaAvisos avisos={avisosEjemplo} onSeleccionar={setSeleccionado} />
        ) : (
          <View style={estilos.placeholder}>
            <Ionicons
              name={pestana === 'inicio' ? 'home-outline' : pestana === 'paquetes' ? 'cube-outline' : 'person-outline'}
              size={38} color={colores.azul} />
            <TextoAvisos variante="tarjeta">{titulos[pestana].titulo}</TextoAvisos>
            <TextoAvisos variante="detalle" style={estilos.centrado}>
              Esta sección es una vista de ejemplo. Aquí integrarás la pantalla del equipo.
            </TextoAvisos>
            <Pressable accessibilityRole="button" onPress={() => setPestana('avisos')} style={estilos.boton}>
              <TextoAvisos style={estilos.textoBoton}>Volver a Avisos</TextoAvisos>
            </Pressable>
          </View>
        )}
      </PlantillaAvisos>
      <ModalDetalleAviso aviso={seleccionado} onCerrar={() => setSeleccionado(null)} />
    </>
  );
}

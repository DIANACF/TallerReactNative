
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, FlatList, Button } from 'react-native';


import { Float } from 'react-native/Libraries/Types/CodegenTypes';

type ArticuloPedido = {
  id: string;
  nombreArt: string;
  precioArt: Float;
  cantidad: number;

}

const PedidoScreen=()=>{
  // actualización del estado de Articulo
  const [ArticuloPedido, setArticuloPedido] = useState<ArticuloPedido[]>([]);

  return(
    <View>
      <Text style={styles.titulo}>Pedido</Text>
      <FlatList
      data={ArticuloPedido}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View>
          <Text>{item.nombreArt}</Text>
          <Text>Cantidad: {item.cantidad}</Text>
          <Text>Total: ${(item.precioArt * item.cantidad)}</Text>

        </View>
      )}
      />

      <Button title='Confirmar Pedido'onPress={()=> alert('Ha confirmado su pedido')}/>

      
    </View>
  );

}
export default PedidoScreen;

const styles = StyleSheet.create({
  titulo: {fontSize: 24, fontWeight: 'bold', marginBottom: 20}
});

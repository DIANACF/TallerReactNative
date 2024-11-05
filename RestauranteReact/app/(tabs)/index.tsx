import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';
type OpcionMenu = {
  id: string;
  categoria: string;
  nombre: string;
  precio: number;
  descripcion: string;
  //imagen: any;
};

//definición del menú
const InfoMenu: OpcionMenu[]= [
  {id: '1', categoria: 'Bebidas Frías', nombre: 'Coca Cola', precio: 3500, descripcion: 'Refresco frío' },
  {id: '2', categoria: 'Bebidas Frías', nombre: 'Postobon Manzana', precio: 3500, descripcion: 'Refresco frío' },
  {id: '3', categoria: 'Sopas', nombre: 'Sopa de pollo', precio: 6000, descripcion: 'Sopa con pieza de pollo y papas'},
  {id: '4', categoria: 'Sopas', nombre: 'Sopa de vegetales', precio: 5000, descripcion: 'Sopa a base de vegetales'},
  {id: '5', categoria: 'Plato del día', nombre: 'Bandeja Paisa', precio: 15000, descripcion: 'Plato de fijoles, con chicharron, aguacate, huevo, arroz, carne' },
  {id: '6', categoria: 'Plato del día', nombre: 'Lasaña', precio: 11500, descripcion: 'Finas capas de pasta intercaladas con carne molida e salsa vechamel' },
  {id: '7', categoria: 'Platos a la carta', nombre: 'Churrasco', precio: 34000, descripcion: 'Churrasco de 600g acompañado de arroz y papas a la francesa' },
  {id: '8', categoria: 'Platos a la carta', nombre: 'Trucha a la marinera', precio: 30000, descripcion: 'Trucha acompañada de salsa, pulpo, camaron, ostras, palmitos, arroz y ensalada' },
  {id: '9', categoria: 'Menu infantil', nombre: 'Hamburguesa', precio: 15000, descripcion: 'Pan integral, con carne asada de 600g, acompañada de salsa rosada, tomate en rodajas, lechuga y papas chip'},
  {id: '10', categoria: 'Menu infantil', nombre: 'Nuggets de pollo', precio: 11500, descripcion: 'Pollo molido, empanizado y frito'}
  
]

const MenuScreen=()=>{
  const [selectedCategory, setSelectedCategory] = useState<string>('Bebidas Frías');


}
export default MenuScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

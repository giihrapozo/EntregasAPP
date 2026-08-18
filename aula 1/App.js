// import { Text, View }
// from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Meu primeiro app!</Text>
// </View>
// );
// }
// EXEMPLO 1 
// import { Text, View } from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Olá, mundo!</Text>
// </View>
// );
// }
// EXEMPLO 2 
// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={{ padding: 20 }}>
// <Text style={{ fontSize: 24 }}>
// Bem-vindo!
// </Text>
// </View>
// );
// }
// EXEMPLO 3
//  import { View, Text, Image, StyleSheet } from 'react-native';
// export default function App() {
//   return (
//     <View style={styles.box}>
//       <Text>Texto no app</Text>
//       <Image source={require('./logo.png')} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   box: {
//     padding: 20,
//   },
// });

// EXEMPLO 4
// import { StyleSheet, Text } from 'react-native';
// export default function App() {
// return (
// <Text style={styles.titulo}>Título</Text>
// );
// }const styles = StyleSheet.create({
// titulo: { fontSize: 22, color: 'tomato' },
// });

// EXMPLO 5
// import {Image, View  } from 'react-native';
// export default function App() {
// return (
// <View>
// <Image
// source={{ uri: 'https://site.com/foto.png' }}
// style={{ width: 100, height: 100 }}
// />
// <Image source={require('./logo.png')}
// style={{ width: 100, height: 100 }} />
// </View>
// );
// }


// EXEMPLO 6

// import React from 'react';
// import { View, Button, TouchableOpacity, Text } from 'react-native';

// export default function Botoes() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
//       <Button title="Clique" onPress={() => alert('Oi!')} />

//       <TouchableOpacity onPress={() => alert('Toque!')}>
//         <Text>Botão personalizado</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// EXEMPLO 7
// import { useState } from 'react';
// import { TextInput } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState('');

//   return (
//     <TextInput
//       value={nome}
//       onChangeText={setNome}
//       placeholder="Digite seu nome"
//     />
//   );
// }

// EXEMPLO 8
// import { ScrollView, Text } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView>
//       <Text>Item 1</Text>
//       <Text>Item 2</Text>
//       <Text>Item 3</Text>
//       {/* ...e muitos outros */}
//     </ScrollView>
//   );
// }
// EXEMPLO 9 
// import { Text } from 'react-native';

// function Saudacao({ nome }) {
//   return <Text>Olá, {nome}!</Text>;
// }

// export default function App() {
//   return (
//     <>
//       <Saudacao nome="Ana" />
//       <Saudacao nome="Beto" />
//     </>
//   );
// }
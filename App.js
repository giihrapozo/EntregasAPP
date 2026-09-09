//  Exercício 1
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return <View style={styles.container} />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3498db',
//   },
// });
// Exercício 2
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.quadrado, styles.vermelho]} />
//       <View style={[styles.quadrado, styles.verde]} />
//       <View style={[styles.quadrado, styles.azul]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },

//   quadrado: {
//     width: 100,
//     height: 100,
//   },

//   vermelho: {
//     backgroundColor: 'red',
//   },

//   verde: {
//     backgroundColor: 'green',
//   },

//   azul: {
//     backgroundColor: 'blue',
//   },
// });
// Exercício 3
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.quadrado} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   quadrado: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'red',
//   },
// });
// Exercício 4
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.quadrado, styles.vermelho]} />
//       <View style={[styles.quadrado, styles.verde]} />
//       <View style={[styles.quadrado, styles.azul]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   quadrado: {
//     width: 80,
//     height: 80,
//   },

//   vermelho: {
//     backgroundColor: 'red',
//   },

//   verde: {
//     backgroundColor: 'green',
//   },

//   azul: {
//     backgroundColor: 'blue',
//   },
// });
// Exercício 5
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.quadrado, styles.um]} />
//       <View style={[styles.quadrado, styles.dois]} />
//       <View style={[styles.quadrado, styles.tres]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },

//   quadrado: {
//     width: 100,
//   },

//   um: {
//     height: 50,
//     backgroundColor: 'red',
//   },

//   dois: {
//     height: 100,
//     backgroundColor: 'green',
//   },

//   tres: {
//     height: 75,
//     backgroundColor: 'blue',
//   },
// });
// Exercício 6
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.quadrado, styles.vermelho]} />
//       <View style={[styles.quadrado, styles.azul]} />
//       <View style={[styles.quadrado, styles.vermelho]} />
//       <View style={[styles.quadrado, styles.azul]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//   },

//   quadrado: {
//     width: 80,
//     height: 80,
//   },

//   vermelho: {
//     backgroundColor: 'red',
//   },

//   azul: {
//     backgroundColor: 'blue',
//   },
// });
// Exercício 7
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.botao}>
//         <Text>Início</Text>
//       </View>

//       <View style={styles.botao}>
//         <Text>Perfil</Text>
//       </View>

//       <View style={styles.botao}>
//         <Text>Mensagens</Text>
//       </View>

//       <View style={styles.botao}>
//         <Text>Configurações</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },

//   botao: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// Exercício 8
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.foto} />

//       <Text style={styles.nome}>Giovanna</Text>

//       <Text style={styles.bio}>
//         Estudante de Informática
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   foto: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#3498db',
//   },

//   nome: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 15,
//   },

//   bio: {
//     fontSize: 16,
//     marginTop: 5,
//   },
// });
// Exercício 9
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.card}>
//         <Text style={styles.titulo}>Card 1</Text>
//         <Text>Produto</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.titulo}>Card 2</Text>
//         <Text>Perfil</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.titulo}>Card 3</Text>
//         <Text>Mensagens</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.titulo}>Card 4</Text>
//         <Text>Configurações</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//     padding: 10,
//   },

//   card: {
//     width: '50%',
//     height: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   titulo: {
//     fontSize: 20,
//   },
// });
// Exercício 10
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.header}>
//         <Text style={styles.titulo}>Meu App</Text>
//       </View>

//       <ScrollView
//         style={styles.content}
//         contentContainerStyle={styles.contentContainer}
//       >
//         <Text>Conteúdo 1</Text>
//         <Text>Conteúdo 2</Text>
//         <Text>Conteúdo 3</Text>
//         <Text>Conteúdo 4</Text>
//         <Text>Conteúdo 5</Text>
//         <Text>Conteúdo 6</Text>
//         <Text>Conteúdo 7</Text>
//         <Text>Conteúdo 8</Text>
//         <Text>Conteúdo 9</Text>
//         <Text>Conteúdo 10</Text>
//         <Text>Conteúdo 11</Text>
//         <Text>Conteúdo 12</Text>
//         <Text>Conteúdo 13</Text>
//         <Text>Conteúdo 14</Text>
//         <Text>Conteúdo 15</Text>
//         <Text>Conteúdo 16</Text>
//         <Text>Conteúdo 17</Text>
//         <Text>Conteúdo 18</Text>
//         <Text>Conteúdo 19</Text>
//         <Text>Conteúdo 20</Text>
//       </ScrollView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   header: {
//     height: 60,
//     justifyContent: 'center',
//     padding: 16,
//   },

//   titulo: {
//     fontSize: 20,
//   },

//   content: {
//     flex: 1,
//   },

//   contentContainer: {
//     flexGrow: 1,
//     padding: 16,
//     gap: 12,
//   },
// });
// Exercício 11
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.conteudo}>
//         <Text>Conteúdo da tela</Text>
//       </View>

//       <View style={styles.navbar}>
//         <Text>🏠</Text>
//         <Text>🔍</Text>
//         <Text>👤</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   conteudo: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   navbar: {
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopWidth: 1,
//   },
// });
// Exercício 12
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.imagem} />

//         <Text style={styles.titulo}>
//           Produto
//         </Text>

//         <Text style={styles.preco}>
//           R$ 99,90
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },

//   card: {
//     backgroundColor: '#eee',
//     borderRadius: 12,
//     padding: 16,
//   },

//   imagem: {
//     width: '100%',
//     height: 180,
//     backgroundColor: '#3498db',
//     borderRadius: 8,
//   },

//   titulo: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 12,
//   },

//   preco: {
//     fontSize: 18,
//     marginTop: 8,
//   },
// });
// Exercício 13
// import React from 'react';
// import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.logo}>
//         <Text>LOGO</Text>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry
//       />

//       <Pressable style={styles.botao}>
//         <Text style={styles.textoBotao}>Entrar</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   logo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#3498db',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },

//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginBottom: 12,
//   },

//   botao: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#3498db',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },

//   textoBotao: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
// Exercício 14
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.quadrado1} />
//       <View style={styles.quadrado2} />
//       <View style={styles.quadrado3} />

//       <View style={styles.quadrado4} />
//       <View style={styles.quadrado5} />
//       <View style={styles.quadrado6} />

//       <View style={styles.quadrado7} />
//       <View style={styles.quadrado8} />
//       <View style={styles.quadrado9} />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   quadrado1: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'red',
//   },

//   quadrado2: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'blue',
//   },

//   quadrado3: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'green',
//   },

//   quadrado4: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'yellow',
//   },

//   quadrado5: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'purple',
//   },

//   quadrado6: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'orange',
//   },

//   quadrado7: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'pink',
//   },

//   quadrado8: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'gray',
//   },

//   quadrado9: {
//     width: '33.33%',
//     height: 150,
//     backgroundColor: 'brown',
//   },
// });
// Exercício 15
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.usuario}>
//         <View style={styles.fotoPerfil} />

//         <Text style={styles.nome}>
//           Giovanna
//         </Text>
//       </View>

//       <Text style={styles.post}>
//         Esse é o texto do meu post!
//       </Text>

//       <View style={styles.imagemPost} />

//       <View style={styles.interacoes}>
//         <Text>❤️ Curtir</Text>
//         <Text>💬 Comentar</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },

//   usuario: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   fotoPerfil: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#3498db',
//   },

//   nome: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 12,
//   },

//   post: {
//     fontSize: 16,
//     marginVertical: 16,
//   },

//   imagemPost: {
//     width: '100%',
//     height: 250,
//     backgroundColor: '#95a5a6',
//     borderRadius: 8,
//   },

//   interacoes: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 16,
//   },
// });
// Exercício 16
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.item}>
//         <View style={styles.foto} />

//         <View style={styles.informacoes}>
//           <Text style={styles.nome}>Produto 1</Text>
//           <Text>Descrição do produto</Text>
//         </View>

//         <Text style={styles.preco}>R$ 50</Text>
//       </View>

//       <View style={styles.item}>
//         <View style={styles.foto} />

//         <View style={styles.informacoes}>
//           <Text style={styles.nome}>Produto 2</Text>
//           <Text>Descrição do produto</Text>
//         </View>

//         <Text style={styles.preco}>R$ 80</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },

//   foto: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#3498db',
//     borderRadius: 8,
//   },

//   informacoes: {
//     flex: 1,
//     marginLeft: 12,
//   },

//   nome: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   preco: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
// Exercício 17 
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.card}>
//         <Text style={styles.icone}>👥</Text>
//         <Text style={styles.numero}>120</Text>
//         <Text>Usuários</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.icone}>💰</Text>
//         <Text style={styles.numero}>250</Text>
//         <Text>Vendas</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.icone}>📦</Text>
//         <Text style={styles.numero}>80</Text>
//         <Text>Produtos</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.icone}>⭐</Text>
//         <Text style={styles.numero}>95</Text>
//         <Text>Avaliações</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   card: {
//     width: '50%',
//     height: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   icone: {
//     fontSize: 30,
//   },

//   numero: {
//     fontSize: 30,
//   },
// });
// Exercício 18
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={[styles.mensagem, styles.recebida]}>
//         <Text style={styles.nome}>Maria</Text>
//         <Text>Oi! Tudo bem?</Text>
//         <Text style={styles.hora}>10:30</Text>
//       </View>

//       <View style={[styles.mensagem, styles.enviada]}>
//         <Text style={styles.nome}>Você</Text>
//         <Text>Oi! Tudo sim!</Text>
//         <Text style={styles.hora}>10:31</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },

//   mensagem: {
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 10,
//     maxWidth: '75%',
//   },

//   recebida: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#ddd',
//   },

//   enviada: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#90ee90',
//   },

//   nome: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },

//   hora: {
//     fontSize: 12,
//     marginTop: 5,
//     textAlign: 'right',
//   },
// });
// Exercício 19
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.linha} />

//       <View style={[styles.evento, styles.esquerda]}>
//         <View style={styles.circulo} />
//         <Text style={styles.titulo}>Evento 1</Text>
//         <Text>Primeiro acontecimento</Text>
//       </View>

//       <View style={[styles.evento, styles.direita]}>
//         <View style={styles.circulo} />
//         <Text style={styles.titulo}>Evento 2</Text>
//         <Text>Segundo acontecimento</Text>
//       </View>

//       <View style={[styles.evento, styles.esquerda]}>
//         <View style={styles.circulo} />
//         <Text style={styles.titulo}>Evento 3</Text>
//         <Text>Terceiro acontecimento</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     padding: 20,
//   },

//   linha: {
//     position: 'absolute',
//     width: 3,
//     height: '100%',
//     backgroundColor: '#3498db',
//     left: '50%',
//     top: 0,
//   },

//   evento: {
//     position: 'relative',
//     width: '45%',
//     padding: 12,
//     backgroundColor: '#eee',
//     borderRadius: 8,
//     marginBottom: 30,
//   },

//   esquerda: {
//     alignSelf: 'flex-start',
//   },

//   direita: {
//     alignSelf: 'flex-end',
//   },

//   circulo: {
//     position: 'absolute',
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: '#3498db',
//     top: 20,
//   },

//   titulo: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
// });
// Exercício 20
import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.campo}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput style={styles.input} />
      </View>

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  campo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  label: {
    width: 80,
    textAlign: 'right',
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  botao: {
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
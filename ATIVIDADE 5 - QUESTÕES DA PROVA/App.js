// 1) 
// Resposta: B) Em React Native, os componentes renderizam elementos nativos da plataforma, enquanto React renderiza elementos HTML.

// 2)
// Resposta: B) justifyContent.

// 3)
// Resposta: B) Props são passadas de pai para filho e são imutáveis; useState gerencia o estado interno do componente e pode ser atualizado.

// 5)
// O texto não está centralizado porque falta a propriedade alignItems: 'center' no container para alinhar o conteúdo horizontalmente, além de garantir a centralização total junto ao justifyContent: 'center'.

// 6)
// Será exibido: Mundo!
// Inicialmente, mensagem recebe "Olá"

// 8)
// Para cada produto será exibido:

// Notebook: R$ 2975,00 — ⚠️ ÚLTIMAS UNIDADES.
// Smartphone: R$ 2000,00 — ✅ EM ESTOQUE.
// Fone de Ouvido: R$ 135,00, com R$ 150,00 riscado — ❌ SEM ESTOQUE.

// 9)
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [mostrar, setMostrar] = useState(false);

//   function mostrarTexto() {
//     setMostrar(!mostrar);
//   }

//   return (
//     <View>
//       <Button title="Mostrar" onPress={mostrarTexto} />

//       {mostrar && <Text>Texto oculto</Text>}
//     </View>
//   );
// }

// 11)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Card({ titulo, corFundo = '#f0f0f0' }) {
  return (
    <View style={[styles.card, { backgroundColor: corFundo }]}>
      <Text>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
});

export default function App() {
  return (
    <View>
      <Card titulo="Meu Card" corFundo="lightblue" />
      <Card titulo="Card padrão" />
    </View>
  );
}

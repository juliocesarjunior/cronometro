import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar",
      ultimo: null
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: "Voltar"});

    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({botao: "Parar"});
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

    }
    this.setState({numero: 0,botao: "Iniciar", ultimo: this.state.numero});
  }



  render() {

    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {this.state.ultimo > 0 ? 'Último Tempo:' + this.state.ultimo.toFixed(2)+'s': ''}
          </Text>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'

  },
  areaUltima: {
    marginTop: 40,

  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'

  },
});

export default App;
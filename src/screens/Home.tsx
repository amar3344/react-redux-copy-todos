import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

export class Home extends Component {
  render() {
    const {products} = this.props;
    console.log(products);

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
    products: state.products,
});

export default connect(mapStateToProps)(Home);

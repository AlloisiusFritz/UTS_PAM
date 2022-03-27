import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import lainnya from '../Image/lainnya.png'
import batal from '../Image/batal.png'
import beranda from '../Image/beranda.png'
import pesanan_tiket from '../Image/pesanan_tiket.png'
import batal_tiket from '../Image/batal_tiket.png'

class Pembatalan extends Component {
    render() {
        const navigation = this.props.navigation;
        const balek_beranda = ()=>{
            navigation.navigate('Pemesanan');
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.main_container}>
                    <View>
                        
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', textAlign: 'center', justifyContent: 'center' }}>
                            Tidak Ada Aktivitas Pembatalan Tiket
                        </Text>
                    </View>
                </View>
                <View style={styles.area_bb}>
                    <TouchableOpacity style={styles.bottom_bar}
                    onPress={balek_beranda}>
                        <View style={styles.view_bb}>
                            <Image source={beranda} style={styles.image_bb} />
                        </View>
                        <Text style={styles.text_bottom}>Beranda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottom_bar}>
                        <View style={styles.view_bb}>
                            <Image source={pesanan_tiket} style={styles.image_bb} />
                        </View>
                        <Text style={styles.text_bottom}>Pesanan Saya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottom_bar}>
                        <View style={styles.view_bb}>
                            <Image source={batal} style={styles.image_bb} />
                        </View>
                        <Text style={styles.text_bottom}>Pembatalan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottom_bar}>
                        <View style={styles.view_bb}>
                            <Image source={lainnya} style={styles.image_bb} />
                        </View>
                        <Text style={styles.text_bottom}>Lainnya</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    bottom_bar: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
    },

    text_bottom: {
        color: '#87CEFA',
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 12,
    },

    view_bb: {
        width: 26,
        height: 26,
    },
    image_bb: {
        width: 28, height: 28,
    },
    area_bb: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
    main_container: {
        flex: 1,
        paddingTop: 50,
    },
});

export default Pembatalan;

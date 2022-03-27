import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import lainnya from '../Image/lainnya.png'
import batal from '../Image/batal.png'
import beranda from '../Image/beranda.png'
import pesanan_tiket from '../Image/pesanan_tiket.png'
import { ScrollView } from 'react-native';
import { Input } from 'react-native-elements'

class Rincian extends Component {
    render() {
        const navigation = this.props.navigation;
        const submit = ()=>{
            navigation.navigate('Pemesanan');
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.main_container}>
                        <View style={styles.formContainer}>
                            <View style={styles.judul_view}>
                                <Text style={styles.judul_text}>Kapalzy</Text>
                            </View>
                            <View>
                                <Text style={styles.informasi}>Informasi Pemesanan</Text>
                            </View>
                            <View style={styles.formContainer_2}>
                                <View style={styles.form}>
                                    <Text style={styles.form_text}>Baekehuni</Text>
                                    <Text style={styles.form_text}> - </Text>
                                    <Text style={styles.form_text}>Merak</Text>
                                </View>

                                <Text style={styles.text_form}>
                                    Jadwal Masuk Pelabuhan
                                </Text>
                                <Text style={styles.text_form}>
                                    Jumat, 15 September 2022
                                </Text>
                                <Text style={styles.text_form}>
                                    15:00 WIB
                                </Text>
                                <Text style={styles.text_form}>
                                    Layanan
                                </Text>
                                <Text style={styles.text_form}>
                                    Express
                                </Text>
                                <View
                                    style={styles.garis}
                                />

                                <View style={styles.row}>
                                    <Text style={styles.col1}>Dewasa x 1</Text>
                                    <Text style={styles.col1}> -- </Text>
                                    <Text style={styles.col1}>Rp. 65.000</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    height: 10,
                                    margin: 6,
                                    padding: 5,
                                    paddingBottom: 15,
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>Data Pemesan</Text>
                                <View >
                                    <Input
                                        style={styles.input}
                                        label="Nama Lengkap"
                                        placeholder="Bulan Ahmad"
                                        
                                    />
                                </View>
                                <View >
                                    <Input
                                        style={styles.input}
                                        label="Identitas"
                                        placeholder="Perempuan"
                                        
                                    />
                                </View>
                                <View >
                                    <Input
                                        style={styles.input}
                                        label="Umur"
                                        placeholder="40 Tahun"
                                        
                                    />
                                </View>
                            </View>


                            <View style={{ paddingTop: 20, }}>
                                <TouchableOpacity
                                    style={styles.button2}
                                    onPress={submit}

                                >
                                    <Text style={styles.textButton2}>
                                        Submit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </ScrollView>

                <View style={styles.area_bb}>
                    <TouchableOpacity style={styles.bottom_bar}>
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
    formContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        flex: 1,
    },
    formContainer_2: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        height: 350,

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        textAlign: 'center',
        alignItems: 'center'
    },
    col1: {
        width: '33%',
        alignItems: 'center',
        paddingTop: 20,
        textAlign: 'center',

    },
    textButton2: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    button2: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        height: 40,
        padding: 10,

    },

    form_text: {
        width: '33%',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    text_form: {
        paddingTop: 20,
        paddingLeft: 8,
        fontWeight: 'bold'
    },

    form: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
    },
    judul_view: {
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 15
    },
    judul_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'blue',
        textAlign: 'center'
    },
    informasi: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingBottom: 15
    },
    garis: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 20,

    },
    input: {
        height: 25,
        margin: 10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        paddingTop:5,
    },

});
export default Rincian;

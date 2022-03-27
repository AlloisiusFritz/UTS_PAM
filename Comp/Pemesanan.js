import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import beranda from '../Image/beranda.png'
import jam from '../Image/jam.png'
import lainnya from '../Image/lainnya.png'
import layanan from '../Image/layanan.png'
import batal from '../Image/batal.png'
import tanggal from '../Image/tanggal.png'
import Vector from '../Image/Vector.png'
import pesanan_tiket from '../Image/pesanan_tiket.png'
import React, { Component } from 'react'
import { Input } from 'react-native-elements'
import { ScrollView } from 'react-native'

class Pemesanan extends Component {
    render() {
        const navigation = this.props.navigation;
        const buat_tiket = ()=>{
            navigation.navigate('Konfirmasi');
        }
        const batalin = ()=>{
            navigation.navigate('Batal');
        }
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.main_container}>
                        <View style={styles.form_container}>
                            <View style={styles.judul_view}>
                                <Text style={styles.judul_text}>Kapalzy</Text>
                            </View>
                            <View >
                                <Input
                                    style={styles.input}
                                    label="Pelabuhan Awal"
                                    placeholder="Pilih Pelabuhan Awal"
                                    leftIcon={<Image source={Vector} style={styles.image_input} />}
                                />
                            </View>
                            <View >
                                <Input
                                    style={styles.input}
                                    label="Pelabuhan Tujuan"
                                    placeholder="Pilih Pelabuhan Tujuan"
                                    leftIcon={<Image source={Vector} style={styles.image_input} />}
                                />
                            </View>
                            <View >
                                <Input
                                    style={styles.input}
                                    label="Kelas Layanan"
                                    placeholder="Pilih Layanan"
                                    leftIcon={<Image source={layanan} style={styles.image_input} />}
                                />
                            </View>
                            <View >
                                <Input
                                    style={styles.input}
                                    label="Tanggal Masuk Pelabuhan"
                                    placeholder="Pilih Tanggal Masuk"
                                    leftIcon={<Image source={tanggal} style={styles.image_input} />}
                                />
                            </View>
                            <View >
                                <Input
                                    style={styles.input}
                                    label="Jam Masuk Pelabuhan"
                                    placeholder="Pilih Jam Masuk"
                                    leftIcon={<Image source={jam} style={styles.image_input} />}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 0.5 }}>
                                    <Input
                                        style={styles.input_jum}
                                        placeholder="Pilih Umur"
                                    />
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <Input
                                        style={styles.input_jum}
                                        placeholder="Pilih Jumlah"
                                    />
                                </View>
                            </View>
                            <View >
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={buat_tiket}
                                >
                                    <Text style={styles.textButton}>
                                        Buat Tiket</Text>
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
                    <TouchableOpacity 
                    style={styles.bottom_bar}
                        onPress={batalin}>
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
    form_container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.5,
        flex: 1,
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
    input: {
        height: 25,
        margin: 10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    image_input: {
        width: 30,
        height: 30,
        padding: 10,
    },
    input_jum: {
        height: 25,
        borderWidth: 1,
        width: 15,
        padding: 5,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,

    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Pemesanan;


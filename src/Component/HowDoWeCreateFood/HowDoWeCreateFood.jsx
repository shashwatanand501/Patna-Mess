import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { Card, Title } from 'react-native-paper';
import DashboardVideo from '../../Assert/Videos/DashboardVideo.mp4';

const { width } = Dimensions.get('window');

const videoData = [
    {
        title: 'How to Make Pizza',
        videoSource: DashboardVideo, // Directly use the imported video
    },
];

export class HowDoWeCreateFood extends Component {
    renderVideoCard = (item) => {
        return (
            <Card key={item.title} style={styles.card}>
                <Video
                    source={item.videoSource}
                    style={styles.video}
                    controls={false} // Show media controls
                    resizeMode="cover"
                    repeat={true} // Loop the video
                    paused={false} // Auto play the video
                />

            </Card>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>How Do We Create Food?</Text>
                {videoData.map(this.renderVideoCard)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    card: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    video: {
        width: width * 0.9,
        height: 200,
    },
});

export default HowDoWeCreateFood;

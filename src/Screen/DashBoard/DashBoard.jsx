import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Animated } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SmallImageCardBtn from '../../Component/SmallImageCardBtn/SmallImageCardBtn';
import HowDoWeCreateFood from '../../Component/HowDoWeCreateFood/HowDoWeCreateFood';
import SubscribeInfo from '../../Component/SubscribeInfo/SubscribeInfo';
import Header from '../../Component/Header/Header';
import MealFoodCard from '../../Component/MealFoodCard/MealFoodCard';
import FullScreenBannerCarousel from '../../Component/FullScreenBannerCarousel/FullScreenBannerCarousel';
import InformationSection from '../../Component/InformationSection/InformationSection';
import Footer from '../../Component/Footer/Footer';

const DashBoard = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Start the color animation loop
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 3,
                    duration: 6000, // Adjusted total duration for all color transitions
                    useNativeDriver: false,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 6000, // Adjusted total duration for all color transitions
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [animatedValue]);

    const colorInterpolation = animatedValue.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: ['orange', 'gray', 'purple', 'red'] // Colors you want to interpolate between
    });

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    const handleSearchPress = () => {
        navigation.navigate('SearchResults');
    };

    const dummyData = [
        {
            image: 'https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast',
            price: 200
        },
        {
            image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/14/full/1694673859-4182.jpeg?im=FeatureCrop,size=(826,465)',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://i0.wp.com/blog.petpooja.com/wp-content/uploads/2021/10/indian.jpg?resize=696%2C385&ssl=1',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://img.freepik.com/premium-photo/delicious-details-closeup-food-table-with-purpose_950053-1523.jpg',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://www.jollibeefoods.com/cdn/shop/files/29351737_2152446668377854_356570745477300982_o_2152446668377854.jpg?v=1634843436&width=1080',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dcYr98RtMQUt86LUwtsFky-Jl6iECPiG9Q&s',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://images.squarespace-cdn.com/content/v1/61d8beaf3a7d6731ad3de44d/489e2a32-f967-4f2f-9d71-b6985460be8c/MEAL-steakhouse-Nutley-NJ.jpg',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
        {
            image: 'https://www.shutterstock.com/image-photo/close-braised-beef-short-rib-260nw-530248354.jpg',
            description: 'A low carb diet focuses on foods that are low in carbohydrates.',
            label: 'Break Fast'
        },
    ];
    const bannerData = [
        {
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505',
            label: 'Smoothie Bowl',
            description: 'A delicious and healthy smoothie bowl.',
        },
        {
            image: 'https://www.kateskitchenkc.com/wp-content/uploads/2020/02/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537.jpg',
            label: 'Breakfast Special',
            description: 'Start your day with our breakfast special.',
        },
        {
            image: 'https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,h_1080,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg',
            label: 'Gourmet Dinner',
            description: 'Experience the best of gourmet dinners.',
        },
        // Add more items if needed
    ];

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Search"
                    onIconPress={handleSearchPress}
                />
                <FullScreenBannerCarousel style={styles.Banner} data={bannerData} />
                <SmallImageCardBtn style={styles.smallimagecardbtn} data={dummyData} />
                <Text style={styles.sectionHeader}>
                    <Text style={styles.coloredText}>A Feast for </Text>
                    <Animated.Text style={[styles.grayText, { color: colorInterpolation }]}>
                        Your Senses
                    </Animated.Text>
                </Text>
                <View style={styles.MealFoodCardContainer}>
                    {dummyData.map((item, index) => (
                        <MealFoodCard
                            key={index}
                            image={item.image}
                            label={item.label}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </View>
                <InformationSection
                    header="Delicious Meals Await"
                    bodyText="Explore our diverse menu and find your favorite dishes. Our meals are prepared with the finest ingredients and cooked to perfection."
                    imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFZDkDyq0Tv9WdhmXp_Y6ecea0M2o6641Wg&s"
                    imagePosition="right"
                />
                <HowDoWeCreateFood />
                <InformationSection />
                <InformationSection
                    header="Delicious Meals Await"
                    bodyText="Explore our diverse menu and find your favorite dishes. Our meals are prepared with the finest ingredients and cooked to perfection."
                    imageUri="https://cdni.iconscout.com/illustration/premium/thumb/chef-with-kitchen-equipment-2660142-2215317.png?f=webp"
                    imagePosition="left"
                />
                <View style={styles.Textcontainer}>
                    <Text style={styles.sectionHeader}>
                        <Text style={styles.grayText}>Your Shortcut to </Text>
                        <Text style={styles.coloredText} >What Matters</Text>
                    </Text>
                </View>
                <SubscribeInfo />
                <Footer />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    contentContainer: {
        gap: 20
    },
    smallimagecardbtn: {
        width: '100%'
    },
    searchbar: {
        marginHorizontal: 5
    },
    MealFoodCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Banner: {
        width: '100%'
    },
    Textcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    sectionHeader: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    coloredText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'rgba(33, 0, 93, 1)',
    },
    grayText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'gray',
    }
});

export default DashBoard;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Restaurants = [
    {
      id: '1',
      image: require('./assets/burgers.jpg'),
      title: 'Groceries',
      description: 'burger, dessert',
      rating: '4.7',
      time: '15-20 min',
    },
    {
      id: '2',
      image: require('./assets/burgers.jpg'),
      title: 'Groceries',
      description: 'burger, dessert',
      rating: '4.7',
      time: '15-20 min',
    },
  ];

  const Groceries = [
    {
      id: '3',
      image: require('./assets/veg.jpg'),
      title: 'Groceries',
      rating: '4.7',
      time: '15-20 min',
    },
    {
      id: '4',
      image: require('./assets/veg.jpg'),
      title: 'Groceries',
      rating: '4.7',
      time: '15-20 min',
    },
    {
      id: '5',
      image: require('./assets/veg.jpg'),
      title: 'Groceries',
      rating: '4.7',
      time: '15-20 min',
    },
  ];

  const Specials = [
    {
      id: '6',
      image: require('./assets/wine.png'),
      category: 'GROCERY',
      title: 'winestory',
      description: 'Special Offer',
    },
    {
      id: '7',
      image: require('./assets/wine.png'),
      category: 'GROCERY',
      title: 'winestory',
      description: 'Special Offer',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mainContent}>
          
          {/* Top Right Icons*/}
          <View style={styles.statusBar}>
            <Text style={styles.timeText}>18:10</Text>
            <View style={styles.statusIcons}>
              <Ionicons name="cellular" size={20} style={styles.icon} />
              <Ionicons name="wifi" size={20} style={styles.icon} />
              <Ionicons name="battery-half" size={20} />
            </View>
          </View>

          {/* Ubicacion */}
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.locationText}>9185 Mayflower Drive Atlanta</Text>
          </View>

          {/* Comida principal*/}
          <Image 
            source={require('./assets/sushi.png')}
            style={styles.foodImage}
          />

          {/* Tarjetas de Restaurants */}
          <Text style={styles.sectionTitle}>All restaurants</Text>
          <View style={styles.cardContainer}>
            <FlatList
              data={Restaurants}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image source={item.image} style={styles.cardImage} />
                  <View style={styles.cardContent}>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>

                    
                    <View style={styles.cardInfoRight}>
                      {/* Rating Info */}
                      <View style={styles.cardRating}>
                        <Ionicons name="star" size={14} color="black" />
                        <Text style={styles.cardRatingText}>{item.rating}</Text>
                      </View>

                      <Text style={styles.cardTime}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          {/* Tarjetas de Groceries */}
          <Text style={styles.sectionTitle}>All Groceries</Text>
          <View style={styles.cardContainer}>
          <FlatList
            data={Groceries}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.groceryCard}>
                <Image source={item.image} style={styles.groceryCardImage} />
                <View style={styles.groceryCardContent}>
                  <View style={styles.groceryCardTextContainer}>
                    <Text style={styles.groceryCardTitle}>{item.title}</Text>
                    <Text style={styles.groceryCardTime}>{item.time}</Text>
                  </View>
                  <View style={styles.groceryCardRating}>
                    <Ionicons name="star" size={14} color="black" />
                    <Text style={styles.groceryCardRatingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

          {/* Tarjetas de Specials */}
          <Text style={styles.sectionTitle}>Specials</Text>
          <View style={styles.SpecialsContainer}>
            <FlatList
              data={Specials}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.Specials}>
                  <Image source={item.image} style={styles.SpecialsImage} />
                  <Text style={styles.SpecialsCategory}>{item.category}</Text>
                  <Text style={styles.SpecialsTitle}>{item.title}</Text>
                  <Text style={styles.SpecialsDescription}>{item.description}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>

      {/* Barra de navegacion fija */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bookmark" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  mainContent: {
    paddingTop: 50,
    paddingBottom: 60, 
  },
  statusBar: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 20,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
  },
  foodImage: {
    width: 370,
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 10,
  },

  //Barra de navegacion fija del Scroll
  navBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
  navItem: {
    alignItems: 'center',
  },

  //Tarjetas para Restaurants
  cardContainer: {
    height: 170,
    paddingLeft: 20, 
  },
  card: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    padding: 10,
    marginRight: 10,
  },
  cardImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoRight: {
    alignItems: 'flex-end',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'gray',
  },
  cardRatingText: {
    fontSize: 12,
    marginLeft: 2,
  },
  cardTime: {
    fontSize: 12,
    color: 'gray',
  },

  //Tarjetas de Groceries
  groceryCard: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    padding: 10,
    marginRight: 10,
  },
  groceryCardImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  groceryCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  groceryCardTextContainer: {
    flex: 1,
  },
  groceryCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  groceryCardRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groceryCardRatingText: {
    fontSize: 12,
    marginLeft: 2,
  },
  groceryCardTime: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },


  //Tarjetas para Specials
  SpecialsContainer: {
    height: 150,
    paddingLeft: 20, 
  },
  Specials: {
    width: 280,
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  SpecialsImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  SpecialsCategory: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    fontSize: 11.75,
    color: '#fff',
  },
  SpecialsTitle: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  SpecialsDescription: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
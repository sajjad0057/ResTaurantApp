import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import FavouriteCard from '../components/FavouriteCard'

const mapStateToProps = state =>{
    return {
        favourites : state.favourites
    }
}


const FavouritesScreen = (props) => {
    return (
        <View>
            <FlatList
            data={props.favourites}
            renderItem={({item})=>(
                <FavouriteCard item={item}/>
            )}
            keyExtractor={item=>item.id.toString()}
            />


        </View>
    )
}

export default connect(mapStateToProps)(FavouritesScreen)



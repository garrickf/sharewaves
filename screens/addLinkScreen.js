import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {addBeacon, addPressure} from '../redux/actions';

import {useDispatch} from 'react-redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import Card from '../components/core/card';
import ActionBar from '../components/core/action-bar';

import {TextInput} from 'react-native';

const AddLinkScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.BackButton}>
        {/* <Button
          title={'BACK'}
          type={BUTTON_TYPES.secondary}
          color={BUTTON_COLORS.coral}
          onPress={() => navigation.navigate('Home')}
        /> */}
      </View>

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>🗞 Share the News</Text>
        <TextInput
          style={{
            alignSelf: 'stretch',
            height: 40,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            marginVertical: 15,
            paddingVertical: 10,
          }}
          placeholder="Paste a link"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.Post}>
        <Button
          title={'POST'}
          onPress={() => {
            dispatch(
              addBeacon({
                header: 'My New Story!!!',
                body: 'I am so happy to be sharing!!!!',
                mine: true,
                type: 'NEWS',
                location: {
                  x: 310,
                  y: 530,
                },
                attention: 0,
                story: ['https://www.bbc.com/news/science-environment-50661448', '', 'trout'],
              }),
            );
            dispatch(addPressure(30, 'Added news story.'));
            navigation.navigate('Home');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Post: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  BackButton: {
    alignSelf: 'flex-start',
    marginTop: 60,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '700',
    color: Colors.black,
    fontFamily: 'DMSans-Bold',
  },
});

export default AddLinkScreen;

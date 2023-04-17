import { Text, TouchableOpacity, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { backgroundColor, textColor } from '../../../pages/calculator/style';
import React, { useState } from 'react';

interface KeyboardProps {
    addPeopleCount: () => void;
    removePeopleCount: () => void;
    divideAccountBetweenPeople: () => void;
    peopleCount: number;
}

const People = ({
    addPeopleCount,
    removePeopleCount,
    divideAccountBetweenPeople,
    peopleCount
}: KeyboardProps) => {
    const [innerNeomorphPlus, setInnerNeomorphPlus] = useState(false);
    const [innerNeomorphLess, setInnerNeomorphLess] = useState(false);
    const [innerNeomorph, setInnerNeomorph] = useState(false);

    return (
        <View>
            <Text
                style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'Gilroy-Bold',
                    flexWrap: 'nowrap'
                }}
            >
                {'Calculate Split Bill ? ( / )'}
            </Text>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'space-around',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={removePeopleCount}
                    onPressIn={() => setInnerNeomorphLess(true)}
                    onPressOut={() => setInnerNeomorphLess(false)}
                >
                    <Neomorph
                        inner={innerNeomorphLess}
                        swapShadows
                        style={{
                            backgroundColor: backgroundColor,
                            shadowRadius: 4,
                            borderRadius: 4,
                            width: 30,
                            height: 30,
                            justifyContent: 'center'
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text
                                style={{
                                    color: textColor,
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    fontFamily: 'Gilroy-Bold',
                                    flexWrap: 'nowrap'
                                }}
                            >
                                {'-'}
                            </Text>
                        </View>
                    </Neomorph>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        marginStart: '5%',
                        marginEnd: '5%',
                        marginBottom: '2%'
                    }}
                    onPressIn={() => setInnerNeomorph(true)}
                    onPressOut={() => setInnerNeomorph(false)}
                    onPress={divideAccountBetweenPeople}
                >
                    <Neomorph
                        inner={innerNeomorph}
                        swapShadows
                        style={{
                            shadowRadius: 4,
                            backgroundColor: backgroundColor,
                            borderRadius: 10,
                            width: 80,
                            height: 40,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                color: textColor,
                                alignItems: 'center',
                                fontSize: 32,
                                fontWeight: 'bold',
                                fontFamily: 'Gilroy-Bold'
                            }}
                        >
                            {peopleCount}
                        </Text>
                    </Neomorph>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={addPeopleCount}
                    onPressIn={() => setInnerNeomorphPlus(true)}
                    onPressOut={() => setInnerNeomorphPlus(false)}
                    activeOpacity={0.8}
                >
                    <Neomorph
                        inner={innerNeomorphPlus}
                        swapShadows
                        style={{
                            backgroundColor: backgroundColor,
                            shadowRadius: 4,
                            borderRadius: 4,
                            width: 30,
                            height: 30,
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: textColor,
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    fontFamily: 'Gilroy-Bold',
                                    flexWrap: 'nowrap'
                                }}
                            >
                                {'+'}
                            </Text>
                        </View>
                    </Neomorph>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default People;

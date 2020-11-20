import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

import {Small, Original} from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

interface LazyImageProps {
    source: string;
    aspectRadio: number;
    smallSource: string;
}

export default function LazyImage({
    source,
    aspectRadio,
    smallSource,
    shouldLoad,
}: LazyImageProps) {
    const opacity = new Animated.Value(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (shouldLoad) {
            //setTimeout(() => {
            setLoaded(true);
            //}, 1000);
        }
    }, [shouldLoad]);

    function handleAnimated() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return (
        <Small
            source={{uri: smallSource}}
            ratio={aspectRadio}
            blurRadius={0.2}
            resizeMode="contain">
            {loaded && (
                <OriginalAnimated
                    style={{opacity}}
                    source={{uri: source}}
                    ratio={aspectRadio}
                    resizeMode="contain"
                    onLoadEnd={handleAnimated}
                />
            )}
        </Small>
    );
}

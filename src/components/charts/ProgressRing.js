import React from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing} from 'react-native';
import {Svg, Circle, Text} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function ProgressRing(props) {
  const [fillAnimation] = React.useState(new Animated.Value(0));

  const radiusWithoutStroke = React.useMemo(
    () => props.radius - props.strokeWidth / 2,
    [props.radius, props.strokeWidth]
  );

  const circumference = React.useMemo(() => 2 * radiusWithoutStroke * Math.PI, [
    radiusWithoutStroke,
  ]);

  React.useEffect(() => {
    Animated.timing(fillAnimation, {
      toValue: props.value,
      easing: Easing.elastic(),
      duration: 750,
    }).start();
  }, [props.value]);

  const commonCircleProps = {
    cx: props.radius,
    cy: props.radius,
    r: radiusWithoutStroke,
    fill: 'transparent',
    strokeWidth: props.strokeWidth,
  };

  return (
    <Svg height={props.radius * 2} width={props.radius * 2}>
      <Circle {...commonCircleProps} stroke={props.trackColor} />
      <AnimatedCircle
        {...commonCircleProps}
        stroke={props.progressColor}
        strokeDasharray={circumference}
        strokeDashoffset={fillAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [circumference, 0],
        })}
        strokeLinecap="round"
        origin={`${props.radius}, ${props.radius}`}
        rotation="-90"
      />
      <Text
        x={props.radius}
        y={props.radius}
        fill="#444"
        fontSize="36"
        textAnchor="middle"
        textLength={radiusWithoutStroke * 2}
        alignmentBaseline="central"
      >
        {`${Math.round(props.value * 100)}%`}
      </Text>
    </Svg>
  );
}

ProgressRing.propTypes = {
  value: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  progressColor: PropTypes.string.isRequired,
  trackColor: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ProgressRing.defaultProps = {
  trackColor: '#bababa',
  strokeWidth: 16,
};

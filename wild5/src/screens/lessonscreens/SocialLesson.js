import React, { Component } from "react";
import { ScrollView, View, Dimensions, StyleSheet, Image } from "react-native";
import { Text, Icon, Container } from "native-base";
import { Actions } from "react-native-router-flux";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
// var Pedometer = require('react-native-pedometer');

var now = new Date();

class SocialLesson extends Component {
  state = {};

  render() {
    return (
      <ScrollView>
        <Container>
          <View>
            <Text style={styles.mainTitle}>
              Learn about{" "}
              <Text style={[styles.mainTitle, { color: "red" }]}>Social</Text>
            </Text>
          </View>

          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Program Expectations
          </Text>
          <Text style={styles.subTitle}>
            Meet or call a minimum of two friends or family each day for 30
            days.
          </Text>
          <Text style={styles.paragraph}>
            Humans are social animals. Socialization is important to both mental
            and physical health. People who socialize more live longer, have
            fewer health issues and are happier. Social isolation is at an
            epidemic level in our society and leads to higher rates of
            depression, anxiety, increased cardiovascular problems, obesity
          </Text>
          <Text style={styles.subTitle}>Two types of Socialization</Text>
          <Text style={styles.subTitle}>Macro-socialization</Text>
          <Text style={styles.paragraph}>
            Engaging in social activities with friends and family members over
            period of months, years, lifetime. Examples include: Dinner with
            family or friends. Seeing a movie with family or friends. Having
            coffee with family or friends. Taking a walk with family or friends.
            joining a book club. Participating in a sporting activity, such as
            tennis, basketball, raquetball. Taking a cooking class or dance
            class with family or friends.
          </Text>
          <Text style={styles.subTitle}>Micro-socialization</Text>
          <Text style={styles.paragraph}>
            Brief social interactions with strangers or casual acquintances.
            Examples include: Saying good morning as you pass someone. Smiling
            as someone approaches. Greeting people at the grocery store or on an
            elevator. Today people are engaging in fewer macro and micro
            socialization activities.**Texting is not an option for socially
            connecting with others**
          </Text>
        </Container>
        <Container>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            I don’t like talking on the phone. It makes me uncomfortable. What
            should I do?
          </Text>
          <Text style={styles.paragraph}>
            We realize not everyone likes talking on the phone. If speaking on
            the phone makes you comfortable, do your best to do it anyway. The
            more you engage in this activity, the easier it will become. Don't
            always do what is easiest - push yourself to break out of your
            comfort zone. We recommend you do both - call others and meet face
            to face; try mixing it up a bit.
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            This seems too easy. How can it be helpful?{" "}
          </Text>
          <Text style={styles.paragraph}>
            Take a moment and consider what previous participants have said
            about this wellness element. Their feedback opened our eyes to the
            power of this intervention...see what you think. Before starting the
            program, one participant felt she was very connected. However, once
            she started tracking her daily socialization practices, she realized
            she wasn't connecting with others as often as she thought. So,
            tracking increased her awareness and offered her an opportunity to
            change her behavior. Another participant was extremely isolated and
            something as simple as calling other, allowed him to engage in
            behavior that increased his level of social connectedness. So please
            don’t underestimate this intervention because of its simplicity.
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            “Macro-socialization” and “Micro-Socialization” are new concepts to
            me. Would you explain what they mean and how they apply to
            kickstart30?
          </Text>
          <Text style={styles.paragraph}>
            Macro-socialization (large): Engaging in big social activities like
            joining a group or spending significant amounts of time with friends
            and family, over a period of months, years, or even a lifetime.
            Micro-socialization (small): Interacting with strangers, or casual
            acquaintances in brief social interactions - nodding pleasantly,
            smiling as someone approaches, or saying good morning. As an
            example, while on an elevator, do you interact with others or avoid
            eye-contact while quietly waiting for your floor? If you avoid
            others on the elevator, you’ve just missed out on an opportunity to
            engage in a micro-socialization activity. Both macro- and
            micro-socialization are powerful ways to boost your mental wellness.
            We encourage you to grab every opportunity to engage in both.
            Practice stepping outside of your comfort zone and give both styles
            of interaction a try. The benefits to your mental wellness will be
            worth the effort.{" "}
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            I don’t have the time to meet face to face with friends or family.
            I’m just too busy. What should I do?
          </Text>
          <Text style={styles.paragraph}>
            We realize hectic schedules make it difficult to find time to
            connect face-to-face. If you’re not yet convinced of the power of
            socialization, we encourage you to review this element. If you want
            to improve your overall mental and physical wellbeing, you must
            overcome this barrier and make time to connect. The benefits far
            outweigh the hassle factor. There is power in meeting face-to-face,
            and spending quality time together in person. When that's not
            possible, connecting via phone is a viable option.
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Do I need to keep track of the people I meet or call, as well as the
            content of the communication?
          </Text>
          <Text style={styles.paragraph}>
            No, you don’t need to keep records. Simply log your practices daily
            using your Participant Tracking Form.
          </Text>
        </Container>
        <Container>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Barriers to Success
          </Text>
          <Text style={styles.subTitle}>Time</Text>
          <Text style={styles.paragraph}>
            we suggest adding your social connectedness activities to your
            calendar and set reminder alerts.
          </Text>
          <Text style={styles.subTitle}>Low Motivation</Text>
          <Text style={styles.paragraph}>
            Acknowledge your lack of drive/motivation as a common feeling, when
            deciding to socialize. On days when you feel avoidant or less than
            social, do your socialization activities anyway - no matter what! A
            couple of other suggestions: Consider enlisting the help of an
            accountability buddy; someone you’ll alert each day letting them
            know you’ve completed your wellness practices, and Consider
            practicing the 5 Second Rule on days when you’re experiencing low
            motivation ( see Tackling Low Motivation on page 45 for information
            about the 5 Second Rule).
          </Text>
        </Container>
        <Container>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            What others are saying
          </Text>
          <Text style={styles.paragraph}>
            “I enjoyed the social connection piece, as I went into the program
            feeling somewhat “isolated” after I retired - spent most of my time
            at home (or though it seemed). I was pleased to find out that my
            social connections were present every day. I was also reaching out
            to more friends by text and by written notes than I had been able to
            do in the past while working. The connections were positive and very
            satisfying”
          </Text>
          <Text style={styles.paragraph}>
            “A great transformation for me in terms of social contact. Needing
            to follow through helped me get over my reticence to call people in
            the evenings. My life is much better”
          </Text>
        </Container>
      </ScrollView>
    );
  }
}

export { SocialLesson };

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10%"
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "20%"
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center"
  }
});

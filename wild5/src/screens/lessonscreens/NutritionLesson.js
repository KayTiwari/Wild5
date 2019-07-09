import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";




const NutritionLesson = () => {
 
    return (
      <View style={{flex: 1}}>
      <ScrollView>
        <View>
            <Text style={styles.mainTitle}>
              Learn about{" "}
              <Text style={[styles.mainTitle, { color: "orange" }]}>
                Nutrition
              </Text>
            </Text>
          </View>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Program Expectations
          </Text>
          <Text style={styles.subTitle}>
            
            Log your daily meals/snacks/beverages/alcohol each day for 30 days [
            follow the MIND diet principles as closely as you can]
          </Text>
          <Text style={styles.paragraph}>
            Goal is to increase your mindful awareness of what you’re consuming.
            Research has shown that many people who keep a journal lose weight.
            Knowing you’re required to log everything into your food journal can
            be a deterrent to overeating.
          </Text>
          <Text style={styles.subTitle}>MIND DIET</Text>
          <Text style={styles.paragraph}>
            Created by Martha Clare Morris, PhD nutritional epidemiologist &
            colleagues at Rush University Medical Center. Based on many years of
            research concerning brain function and diet. MIND stands for
            Mediterranean-DASH Intervention for Neurodegenerative Delay. MIND is
            hybrid of mediterranean and DASH diet. DASH diet is (Dietary
            Approaches to Stop Hypertension). MIND follows Mediterranean
            principles eat more vegetables, fruits, whole grains, fish, olive
            oil, and nuts. Limit consumption of diary.
          </Text>
          <View style={{flex: 1}}>
          <Text style={styles.subTitle}>
            Why is food logging so important to my mental wellness?
          </Text>
          <Text style={styles.paragraph}>
            Every single chemical and neurotransmitter in your brain is created
            from FOOD! Yes, we are indeed what we eat! If you eat poorly, both
            your mind and your body suffer. One more thing to remember, excess
            calories lead to poor brain health. By logging your food regularly,
            using an app such as MyFitnessPal or a paper diary, you will become
            more aware of what you eat, and hopefully, based on this increase
            mindful awareness, you’ll make changes that ultimately benefit your
            body, brain and mental wellness. Logging is crucial!!
          </Text>
          <Text style={styles.subTitle}>
            What is the MIND diet? Why is it being recommended for Kickstart30?
          </Text>
          <Text style={styles.paragraph}>
            The MIND diet is a research based way of eating that has been shown
            to protect both your brain and body. The diet is easy to follow and
            emphasizes plant-based nutrition, with limited amounts of animal
            proteins. This is a simple and effective way to improve your global
            health and well-being without too much effort.
          </Text>
          <Text style={styles.subTitle}>
            Is MyFitnessPal an easy app or website to use?
          </Text>
          <Text style={styles.paragraph}>
            Yes, it is! The app is highly educational and motivational in nature
            and does a great job of increasing your overall mindful awareness of
            what you’re consuming. Please download the app to your smartphone
            prior to starting the program and become familiar with its features.
            This app motivates users to eat better. IF you’re not a fan of apps,
            keep a paper food diary. If you’re already using another food
            logging app, like Weight Watchers, there is no need to change.
          </Text>
          <Text style={styles.subTitle}>
            Can I follow the MIND diet for a lifetime?
          </Text>
          <Text style={styles.paragraph}>
            Absolutely! This diet should be followed for years to gain maximum
            benefit. It’s rich in good fats and limits bad fats (from animal
            sources), plus it encourages you to eat nuts, vegetables, and
            fruits. It’s a win-win lifestyle modification that pays off very
            handsomely in many ways.
          </Text>
          <Text style={styles.subTitle}>
            Is KickStart30 a weight loss program?
          </Text>
          <Text style={styles.paragraph}>
            No, KickStart30 was not created to be a weight loss program.
            However, there is scientific evidence showing that many people who
            write down everything they eat and drink on a regular basis, do in
            fact lose weight. Keeping a food diary significantly reduces
            mindless eating which can be a major factor in gaining weight.
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            Barriers to Success
          </Text>
          <Text style={styles.subTitle}>Time</Text>
          <Text style={styles.paragraph}>
            Take the time to log your meals/snacks/beverages/alcohol throughout
            the day. Try best to avoid waiting until bedtime to complete your
            log. Keep up the practice, it will get easier as you go along. Add a
            reminder to log your intake on your calendar and set reminder alerts
          </Text>
          <Text style={styles.subTitle}>Low Motivation</Text>
          <Text style={styles.paragraph}>
            Acknowledge your lack of drive/motivation as a common feeling when
            starting the practice of keeping a food log, implementing a new meal
            plan, and/or practicing mindful eating. On days when you don't feel
            like doing these activities, do them anyway - No matter what! A
            couple of suggestions: Consider enlisting the help of an
            accountability buddy; someone you’ll alert each day letting them
            know you’ve completed your wellness practices, and Consider
            practicing the 5 Second Rule on days when you’re experiencing low
            motivation ( see Tackling Low Motivation on page 45 for information
            about the 5 Second Rule).
          </Text>
          <Text style={[styles.mainTitle, { marginTop: "20%" }]}>
            What others are saying
          </Text>
          <Text style={styles.paragraph}>
            “I have already lost weight. I’m developing a new appreciation of
            the taste of food. I feel very strongly that the “mindful eating
            meditation” is integral to success with changing eating habits. It
            slows everything down, maintains awareness, enhances the
            appreciation of food, and interestingly, when done appropriately it
            cuts down the amount of food I even want completely outside of my
            conscious awareness.”
          </Text>
          <Text style={styles.paragraph}>
            “I have lost ten pounds since the completion of the survey. It has
            helped me feel better about myself. This program has helped to show
            me that with a bit more attention to what I’m eating and some
            exercise, I can change my body for the better. I never ate terribly,
            but the amount of sugar and caffeine I was using to keep going took
            a toll. I feel better about what I’m eating and I’m happier that I
            am more active.”
          </Text>
          </View>

        
      </ScrollView>
      </View>
    );
  }


export { NutritionLesson };

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

import { Button, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  useNavigation,
  StackActions,
  useRoute,
} from "@react-navigation/native";

import { Container } from "./styles";
import Typography from "../../components/Typography";
import HeaderNavIcon from "../../components/HeaderNavIcon";

import { MEALS } from "../../data/meals.data";

interface RouteProps {
  key: string;
  name: string;
  params: {
    mealId: string;
  };
}

const MealDetail = () => {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();

  const filteredMealDetail = MEALS.find(
    (meal) => meal.id === route.params.mealId
  );

  useEffect(() => {
    navigation.setOptions({
      title: filteredMealDetail?.title,
      headerRight: () => (
        <TouchableOpacity>
          <HeaderNavIcon iconName="ios-star-outline" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <Typography>{filteredMealDetail?.title}</Typography>
      <Button
        title="Go back to Categories"
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
      />
    </Container>
  );
};

export default MealDetail;

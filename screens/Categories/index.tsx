import { FlatList, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, extraStyles } from "./styles";
import Typography from "../../components/Typography";
import { CATEGORIES } from "../../data/categories.data";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      keyExtractor={(data) => data.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={(data) => (
        <Container>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate("CategoryMeal", { categoryId: data.item.id })
            }
          >
            <View
              style={[
                extraStyles.shadowBox,
                { backgroundColor: data.item.color },
              ]}
            >
              <Typography style={extraStyles.boldTitle}>
                {data.item.title}
              </Typography>
            </View>
          </TouchableNativeFeedback>
        </Container>
      )}
    />
  );
};

export default Categories;

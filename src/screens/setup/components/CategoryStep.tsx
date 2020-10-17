import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { Categories } from '../../../res/strings/categories';

import { color, typography, spacing } from '../../../theme';
import { Category } from '../../../types/enums';
import strings from '../../../res/strings/strings';

interface OwnProps {
  slideToNext: () => void;
  selectedCategory: Category | undefined;
  setSelectedCategory: (param: Category | undefined) => void;
}

const CategoryStep: React.FC<OwnProps> = ({
  slideToNext,
  selectedCategory,
  setSelectedCategory,
}) => {
  const onMakeupChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.Makeup);
  };

  const onLashesChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.Lashes);
  };

  const onHairChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.Hair);
  };

  const onEyebrowsChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.Eyebrows);
  };

  const onNailsChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.Nails);
  };

  const onBodyCareChange = (newValue: boolean) => {
    if (newValue === false) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(Category.BodyCare);
  };

  const isContinueDisabled = selectedCategory === undefined;

  const onContinuePress = () => {
    if (selectedCategory === undefined) {
      return;
    }
    let categoryName = Category[selectedCategory];
    if (categoryName === 'BodyCare') {
      categoryName = 'Body Care';
    }

    slideToNext();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{strings.screen.setup.category.title}</Text>
        <Text style={styles.description}>
          {strings.screen.setup.category.description}
        </Text>
        <View style={styles.checksContainer}>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.Makeup}
              onValueChange={(newValue: boolean) => onMakeupChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onMakeupChange(true)}
            >
              <Text style={styles.optionText}>{Categories.makeup}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.Lashes}
              onValueChange={(newValue: boolean) => onLashesChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onLashesChange(true)}
            >
              <Text style={styles.optionText}>{Categories.lashes}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.Hair}
              onValueChange={(newValue: boolean) => onHairChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onHairChange(true)}
            >
              <Text style={styles.optionText}>{Categories.hair}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.Eyebrows}
              onValueChange={(newValue: boolean) => onEyebrowsChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onEyebrowsChange(true)}
            >
              <Text style={styles.optionText}>{Categories.eyebrows}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.Nails}
              onValueChange={(newValue: boolean) => onNailsChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onNailsChange(true)}
            >
              <Text style={styles.optionText}>{Categories.nails}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowOption}>
            <CheckBox
              tintColor={color.unchosen}
              onAnimationType="fill"
              offAnimationType="fill"
              onTintColor="transparent"
              onFillColor={color.textSecondary}
              onCheckColor={color.background}
              value={selectedCategory === Category.BodyCare}
              onValueChange={(newValue: boolean) => onBodyCareChange(newValue)}
            />
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => onBodyCareChange(true)}
            >
              <Text style={styles.optionText}>{Categories.bodyCare}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <PrimaryButton
          containerStyle={styles.continueBtn}
          title="Continue"
          onPress={onContinuePress}
          isDisabled={isContinueDisabled}
        />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  input: ViewStyle;
  keyboardAccessory: ViewStyle;
  checksContainer: ViewStyle;
  rowOption: ViewStyle;
  optionText: TextStyle;
  continueBtn: ViewStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  input: {
    marginTop: 30,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
  checksContainer: {
    paddingHorizontal: 5,
    marginTop: 8,
  },
  rowOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  optionText: {
    ...typography.checkOption,
    marginLeft: 16,
    marginTop: 2,
  },
  continueBtn: {
    position: 'absolute',
    bottom: 50,
  },
  textContainer: {
    width: '100%',
  },
  title: {
    ...typography.title3Bold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: spacing.smallest,
  },
});

export default CategoryStep;

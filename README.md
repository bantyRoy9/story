This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli), customized to implement a **modern blog-style UI** with drawers, cards, icons, and content sections.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

Metro is the JavaScript bundler used by React Native. To start it:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and Run Your App

Open a new terminal window and run the app on your platform:

### Android

```sh
npm run android
# or
yarn android
```

### iOS

Install CocoaPods dependencies first:

```sh
cd ios
bundle install
bundle exec pod install
```

Then run:

```sh
npm run ios
# or
yarn ios
```

> 💡 You can also open the iOS project in Xcode and run directly.

## Step 3: Explore the App Structure

This project includes:

### 🫟 Navigation

* `@react-navigation/native`, `@react-navigation/drawer` for nested left and right drawers
* Custom `Header` component that uses `SafeAreaView` to respect the status bar on iOS

### 🎨 UI Components

* **FeaturedPostCard** with overlay icons, meta info, category & date
* **Featured Slider** section with carousel
* **Travel Tips**, **Most Popular**, **Last Comments** sections

### 🎯 Icons

* Icons implemented with [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) or emoji placeholders (can be replaced)

### 📦 Folder Structure (recommended)

```
src/
├── components/
│   ├── Header.tsx
│   ├── FeaturedPostCard.tsx
│   ├── TravelTipsSection.tsx
│   ├── PopularPostsSection.tsx
│   └── CommentsSection.tsx
├── navigation/
│   └── DrawerNavigator.tsx
├── screens/
│   └── HomeScreen.tsx
└── assets/
    └── images/
```

## Step 4: Modify and Extend

Edit `src/components/` to customize UI components.

## Reloading Tips

* **Android**: Press `R` twice or use `Cmd+M`
* **iOS**: Press `Cmd+R` in the simulator

## Troubleshooting

If issues arise:

* Run `npx react-native doctor`
* Delete build caches: `cd android && ./gradlew clean`
* Clear Metro cache: `npx react-native start --reset-cache`

## Resources

* [React Native Docs](https://reactnative.dev/docs/getting-started)
* [React Navigation Docs](https://reactnavigation.org/docs/getting-started/)
* [Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [Expo Asset Management](https://docs.expo.dev/guides/assets/)

## 🚀 Features Implemented

* ✅ Safe-area aware Header with Buy Now button
* ✅ Left and Right Drawer Navigation
* ✅ Featured section with overlay + slider
* ✅ Travel tips and category card list
* ✅ Most popular section
* ✅ Last comments with avatars
* ✅ Word-format README generation

---

## ✅ Next Steps

* Add API integration for dynamic content
* Implement dark mode
* Improve accessibility and animations

> 🎉 You now have a fully responsive blog-style React Native app that mirrors a modern web design, built with modular components and scalable layout.

Happy coding! 💻✨

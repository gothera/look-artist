#!/bin/bash

PLATFORM=$1
CLEANED=0

bundleAndroid() {
    echo "BUNDLING ANDROID FOR FASTLANE"
    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    if test -z "$?"; then
        echo "DONE"
    else
        echo "SOMETHING WENT WRONG WITH THE ANDROID BUNDLE"
    fi
}

cleanNPM() {
    echo "CLEANING NPM PROJECTS..."
    watchman watch-del-all
    rm yarn.lock
    rm -rf node_modules
    rm -rf $TMPDIR/react-*
    rm -rf $TMPDIR/npm-*
    yarn cache clear
    yarn install

    echo "DONE CLEANING NPM"
}

cleanIOS() {
    echo "CLEANING IOS ..."
    cd ios
    rm Podfile.lock
    rm -rf Pods
    rm -rf build
    pod cache clean --all
    pod repo update && pod install
    cd ..
    echo "DONE CLEANING IOS"
}

cleanAndroid() {
    echo "CLEANING ANDROID PROJECT ..."
    cd android
    ./gradlew clean
    ./gradlew cleanBuildCache
    npx jetify
    cd ..
    echo "DONE CLEANING ANDROID"

}

printHelp() {
    if [[ ($1 != "help") ]]; then
        echo "Please specify a valid option"
    fi
    echo "Options: "
    echo "  npm     - Cleans just node modules. All the other options also do this"
    echo "  ios     - Cleans IOS project"
    echo "  android - Cleans Android project"
    echo "  all     - Cleans both project"
    echo "  bundle  - Cleans Android project and assembles the bundle. Useful for fastlane"
    echo "  help    - Shows this menu"
    echo ""
    echo "Optional parameters: "
    echo "  --start - Runs react-native start after clean is done"
}

if test -z "$PLATFORM"; then
    printHelp
else
    case $PLATFORM in
    npm)
        cleanNPM
        CLEANED=1
        ;;
    android)
        echo 'CLEANING NPM AND ANDROID'
        cleanNPM
        cleanAndroid
        CLEANED=1
        ;;
    ios)
        echo 'CLEANING NPM AND IOS'
        cleanNPM
        cleanIOS
        CLEANED=1
        ;;
    all)
        echo "CLEANING NPM, ANDROID AND IOS ..."
        cleanNPM
        cleanAndroid
        cleanIOS
        CLEANED=1
        ;;
    bundle)
        cleanNPM
        cleanAndroid
        bundleAndroid
        CLEANED=1
        ;;
    help)
        printHelp
        ;;
    *)
        printHelp
        ;;
    esac
fi
CLEANED=1
if [[ ($2 == "--start") && ($CLEANED == 1) ]]; then
    yarn start -- --reset-cache
fi

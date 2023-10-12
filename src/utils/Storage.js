import AsyncStorage from '@react-native-async-storage/async-storage';


const Storage = {
    setItem:  async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error('Error setting item in storage:', error);
        }
    },

    getItem: async (key) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.error('Error getting item in storage', error);
            return null;
        }
    },

    removeItem: async (key) => {
        try {

        } catch (error) {
            console.error('Error removing item in storage', error)
        }
    }
};

export default Storage
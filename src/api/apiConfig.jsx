const serverHost = "http://192.168.121.122:3001";

// get Apis
export const getAddress = `${serverHost}/api/get/address`;
export const loginUserApi = `${serverHost}/api/user/login`;
export const getUserApi = `${serverHost}/api/get/users`;
export const getProductApi = `${serverHost}/api/get/image`;
export const getPastryApi = `${serverHost}/api/get/pastry`;
export const getChocolateApi = `${serverHost}/api/get/chocolate`;
export const getIcecreamApi = `${serverHost}/api/get/icecream`;
export const getChocolateCake = `${serverHost}/api/get/chocolate`;
export const getButterScotchCake = `${serverHost}/api/get/butterscotch`;
export const getFlowerCake = `${serverHost}/api/get/flower`;
export const getTruffleCake = `${serverHost}/api/get/truffle`;
export const getRedvelvetCake = `${serverHost}/api/get/redvelvet`;
export const getVanillaCake = `${serverHost}/api/get/vanilla`;
export const getFruitCake = `${serverHost}/api/get/fruit`;
export const getPineappleCake = `${serverHost}/api/get/pineapple`;
// Upload Apis

export const createUserApi = `${serverHost}/api/user/register`;
export const createProductApi = `${serverHost}/api/upload/image`;
export const createDelivaryDetails = `${serverHost}/api/upload/delivary/information`;
export const uploadPastryApi = `${serverHost}/api/upload/pastry`;
export const uploadIcecreamApi = `${serverHost}/api/upload/icecream`;
export const uploadChocolateApi = `${serverHost}/api/upload/chocolate`;
export const uploadAddress = `${serverHost}/api/upload/address`;

// all in one
export const getAllProducts = `${serverHost}/api/products`;

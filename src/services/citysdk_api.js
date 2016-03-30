const sdk = new CitySDK();
const census = sdk.modules.census;
const apiKey = "a019e5781e0a1ae25a17230a2e4404585c4ac414";
census.enable(apiKey);

export default census;
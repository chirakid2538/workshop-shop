const omisePublicKey = process.env.REACT_APP_OMISE_PUBLIC_KEY || 'pkey_test_5fxhxllmtjghunwh3ki';
window.Omise.setPublicKey(omisePublicKey);

export default window.Omise;
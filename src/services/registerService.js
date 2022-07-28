const registerService = {
  registerUser() {
    return Promise.resolve({
      "registration": "SUCCESS",
      "message": ""
    });
  },
};

export default registerService;
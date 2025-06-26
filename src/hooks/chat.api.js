export const postMessage = async (formData, axiosSecure) => {
  const response = await axiosSecure.post(`/chat/send`, formData);
  return response.data;
};

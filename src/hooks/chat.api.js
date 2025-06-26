export const postMessage = async (formData, axiosSecure) => {
  const response = await axiosSecure.post(`/api/chat/send`, formData);
  return response.data;
};

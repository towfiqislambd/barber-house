export const postMessage = async (id, formData, axiosSecure) => {
  const response = await axiosSecure.post(`/api/send-message/${id}`, formData);
  return response.data;
};

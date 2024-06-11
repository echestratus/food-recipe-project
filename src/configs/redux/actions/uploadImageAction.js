import axios from "axios";

export const uploadImageAction = (e) => (dispatch) => {
    dispatch({
        type: "UPLOAD_IMAGE_REQUEST"
    })
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const { file_url } = res.data.data;
        dispatch({
            type: "UPLOAD_IMAGE_SUCCEED",
            payload: file_url
        })
        alert('Image Uploaded')
      })
      .catch((err) => {
        dispatch({
            type: "UPLOAD_IMAGE_FAILED",
            payload: err.response
        })
        alert(`Failed to upload image`);
      });
}
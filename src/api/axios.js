import axios from "axios";

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000, // 5초
});

export default apiClient;

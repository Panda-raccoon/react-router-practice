import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네이게이션 바
// 2. 전체상품페이지 : 전체상품 목록을 불러와서 보여줌
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 되어어있을 경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있따.
// 6. 로그아웃 버튼을 클릭하면, 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다..다시 로그인 페이지로 이동된다.
// 8. 고르인을 하면 로그아웃이 보이고 록아웃을 하면 로그인이 보인다.
// 9. 상품을 검색 할 수 있다.

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
